var express =require('express');
var app=express();

app.use(express.static('public'))

app.get("/",(req,res)=>{
    res.sendFiles("index.html")
});

app.listen(8000,()=>{
    console.log("lisening on port 8000");
})