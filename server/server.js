const path=require('path');
const express=require('express');

var app=express();

const port=process.env.PORT || 3000;

const publicPath=path.join(__dirname,'../public');

app.use(express.static(publicPath));

// app.get('/',function(req,res){
// 	res.sendFile(index.html);
// })



app.listen(port,function(req,res){
	console.log(`Server is up in port ${port}...`);
})


