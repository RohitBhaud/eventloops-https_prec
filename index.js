const express = require("express")
const app = express();
app.listen(4500,()=>{
    console.log("port 4500 running")
})
app.get("",(req,res)=>{
    res.send("Hello")
})
app.get("/books",(req,res)=>{
res.send({book1:"maths" ,book2:"science" , book3:"hisory" , book4:"english"})
})