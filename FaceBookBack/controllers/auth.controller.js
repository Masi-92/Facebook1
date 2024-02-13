import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";
import Jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { fullName, email, password } = req.body;
  //if(!(fullName && password && email))
  if (!fullName || !password || !email) {
    return res.status(400).send({ msg: "Please Enter all field" });
  }
  const user = await userModel.findOne({ email });
  if (user) {
    return res.status(400).send({ msg: "email is used try again " });
  }

  const hash = await bcrypt.hash(password, 10);
  const newUser = await userModel.create({
    email,
    fullName,
    password: hash,
  });
  res.send(newUser);
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .send({ msg: "Your Email or your Password is empty" });
  }
  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).send({ msg: "user is not exist" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).send({ msg: "Password is not correct" });
  }
  
  const token = Jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1 day",
  })
  res.send({token, msg: "Wellcommen" });
};

export const getProfile = async(req,res)=>{

  const userId = req.user.id
  const user  = await userModel.findById(userId)
  res.send(user)

}

 export const editProfile= async(req,res)=>{

  const userId = req.user.id
  const user  = await userModel.findByIdAndUpdate($Set)
  res.send(user)

}