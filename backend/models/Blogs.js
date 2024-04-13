const mongoose=require("mongoose")

const blogSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    description:{
        type:String,
        required:true,
        trim:true
    },
    image:{
        type:String
    },
    category:{
        type:String,
        required:true,
        trim:true
    }
})

module.exports=mongoose.model("blogs",blogSchema)