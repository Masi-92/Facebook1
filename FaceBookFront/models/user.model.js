import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: String,
  email: { type: String, unique:true, required:true },
  password: {type:String,required:true,minLength:6},
  role:{type:String,default:"user"}
});


export default model("user",userSchema)