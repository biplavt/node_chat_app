var socket=io();

socket.on('connect',function(){
	console.log('connected to server: client');

});

	
socket.on('disconnect',function(){
	console.log('disconnect:client');
});

socket.on('newMessage',function(message){
	console.log('New message arrived:',message);
	var li=jQuery('<li></li>');
	li.text(`${message.from}:${message.text}`);

	jQuery('#messages').append(li);
})

jQuery('#message-form').on('submit',function(e){
	e.preventDefault();

	socket.emit('createMessage',{
		from:'User',
		text:jQuery('[name=message]').val()
	},function(){

	});
});