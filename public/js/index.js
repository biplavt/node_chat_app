var socket=io();

socket.on('connect',function(){
	console.log('connected to server: client');

	
	// socket.emit('createMessage',{
	// 	from:'client',
	// 	text:'yes yes'
	// })
});

	
socket.on('disconnect',function(){
	console.log('disconnect:client');
});

socket.on('newMessage',function(newMessage){
	console.log('New message arrived:',newMessage);
})