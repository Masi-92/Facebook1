import { Schema, model } from "mongoose";

const schema= new Schema({

username:String,
avatar:String,
likeCount:Number,
image:String,
},{

timestamps:true
})

export default model("post",schema)