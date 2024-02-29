import { Schema, model } from "mongoose"

const schema = new Schema({
    user:{type:Schema.Types.ObjectId,ref:"user"},
    text:String,
    post:{type:Schema.Types.ObjectId,ref:"post"}
})

export default model("comment",schema)