const express = require("express");
const app = express();
const mongoose = require('mongoose');
//const Users=require("./Model/Users");
const blog=require("./Model/blog");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//adding user data into database every querry on db is asynchronous
// app.post("/Users",async(req,res)=>{
//   let {name,email, password} = req.body;
//   let newUser=new Users({
//     name:name,
//     email:email,
//     password:password
//   });
//   await newUser.save();
//   res.send("user added")
// })



app.post("/blog",async(req,res)=>{
  let {title,Content,Author} = req.body;
  let newblog = new blog({
    title:title,
    Content:Content,
    Author: Author
  });
  await newblog.save();
  res.send("blog added")
})




mongoose.connect('mongodb://127.0.0.1:27017/classDb')      //mongodb://localhost:portno./db name
.then(() => console.log('Database connected successfully'))
.catch((err) => console.log('Database connection error:', err));

app.listen(7777,()=>{
    console.log("server started")
})