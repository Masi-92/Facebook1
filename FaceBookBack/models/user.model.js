import { Schema, model } from "mongoose";

const userSchema = new Schema({
  fullName: String,
  email: { type: String, unique:true, required:true },
  password: {type:String,required:true,minLength:6},
  role:{type:String,default:"user"},
  avatar:String,
  description:String,
  bio:String,
  linkFaceBook:String,
  LinkTwitter:String,
  LinkInstagram:String
});


export default model("user",userSchema)