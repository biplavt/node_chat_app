const path=require('path');
const express=require('express');
const socketIO=require('socket.io');
const http=require('http');

const port=process.env.PORT || 3000;
const publicPath=path.join(__dirname,'../public');
var app=express();
var server=http.createServer(app);
var io=socketIO(server);


app.use(express.static(publicPath));
const {generateMessage,generateLocationMessage}=require('./utils/message');



io.on('connection',(socket)=>{
	console.log('new user connected:server');

	socket.emit('newMessage',generateMessage('Admin','Welcome to chat app'));

	socket.broadcast.emit('newMessage',generateMessage('Admin','New player joined'));


	socket.on('createMessage',function(newMessage,callback){
		console.log('new Message:',newMessage);
		io.emit('newMessage',generateMessage(newMessage.from,newMessage.text))
		callback('This is from the server.');
	})

	socket.on('createLocationMessage',(coords)=>{
		io.emit('newLocationMessage',generateLocationMessage('Admin',coords.latitude, coords.longitude))
	});


	socket.on('disconnect',()=>{
		console.log('user disconnected:server');
	})
});



server.listen(port,function(){
	console.log(`Server is up in port ${port}...`);
})


