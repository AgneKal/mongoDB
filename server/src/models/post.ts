import mongoose from "mongoose";

const postSchema=new mongoose.Schema({
    title:{ 
        type:String,
        required:true, 
    },
    content:{
        type:String,
        default:""
    },
    author:{
        required:true,
        type:{
            name:String,
            email:{
                type:String,
                required:true
            }
        },
        _id:false
    },
    comments:[
        {
            text:String,
            full_name:String
        }
    ]
});

const Post=mongoose.model("Post", postSchema);

export {Post};