const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Users=require("./Model/Users");
const blog=require("./Model/blog");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



//adding user data into database every querry on db is asynchronous
app.post("/Users",async(req,res)=>{
  let {name,email, password} = req.body;
  let newUser=new Users({
    name:name,
    email:email,
    password:password
  });
  await newUser.save();
  res.send("user added")
})

app.get("/Users",async(req,res)=>{
  //1.read the data
  let allusers=await Users.find();
  res.send(allusers)
})



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

app.get("/blogs",async(req,res)=>{
  //1.read the data
  let allblogs=await blog.find();
  res.send(allblogs)
})

app.get("/Users/:id",async(req,res)=>{
  let {id}=req.params;
  let user=await Users.findById(id)
  res.send(user)
})

app.get("/blogs/:id",async(req,res)=>{
  let {id}=req.params;
  let blogs=await blog.findById(id)
  res.send(blogs)
})




mongoose.connect('mongodb://127.0.0.1:27017/classDb')      //mongodb://localhost:portno./db name
.then(() => console.log('Database connected successfully'))
.catch((err) => console.log('Database connection error:', err));

app.listen(7777,()=>{
    console.log("server started")
})