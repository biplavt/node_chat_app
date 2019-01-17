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


io.on('connection',(socket)=>{
	console.log('new user connected:server');

	
	socket.on('createMessage',function(newMessage){
		console.log('new Message:',newMessage);
		io.emit('newMessage',{
			from:newMessage.from,
			text:newMessage.text,
			createdAt:new Date().getTime()
		})
	})



	socket.on('disconnect',()=>{
		console.log('user disconnected:server');
	})
});



server.listen(port,function(){
	console.log(`Server is up in port ${port}...`);
})


