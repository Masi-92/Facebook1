import { useEffect, useState } from "react";
import style from "./about.module.scss"
import { getProfile } from "../../../Api/profile.api";
const About = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
   getProfile()
   .then((res)=>{
  setData({description:res.data.description,
  job:res.data.job})
   }) 
   .catch((err) => alert(err));
  },[])
  return (
    <div className={style.container}>
<h1>About</h1>
<p>{data.description}</p>

    </div>
  )
}

export default About