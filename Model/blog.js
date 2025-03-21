const mongoose = require("mongoose");

let blogSchema = new mongoose.Schema({
    title:String,
    
    Content:String,
    
    Author:{
        type:String,
        require:true
    },
    Date:{
        type:Date,
        default:Date.now()
    }
});

module.exports=mongoose.model("blog",blogSchema);