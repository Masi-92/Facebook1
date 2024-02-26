import { Schema, model } from "mongoose";

const schema= new Schema({

user:{type:Schema.Types.ObjectId,ref:"user"},
likeCount:{default:0,type:Number},
image:String,
text:String,

},{

timestamps:true
})


export default model("post",schema)