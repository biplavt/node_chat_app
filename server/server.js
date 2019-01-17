const path=require('path');
const express=require('express');

var app=express();

const publicPath=path.join(__dirname,'../public');

app.use(express.static(publicPath));

// app.get('/',function(req,res){
// 	res.sendFile(index.html);
// })



app.listen(3000,function(req,res){
	console.log('Server is up in port 3000...');
})


