import userModel from "../models/user.model.js";
import bcrypt from "bcrypt";

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
  res.send(newUser)
};
