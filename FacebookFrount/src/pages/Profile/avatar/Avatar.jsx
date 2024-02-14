import { useEffect, useState } from "react";
import style from "./avatar.module.scss"
import { getProfile } from "../../../Api/profile.api";

const Avatar = () => {
  const [data, setData] = useState([]);

useEffect(()=>{
 getProfile()
 .then((res)=>{
setData({fullName:res.data.fullName,
job:res.data.job})
 }) 
 .catch((err) => alert(err));
},[])

  return (
    <div className={style.container}>
<img  alt="" />
<h1>{data.fullName}</h1>
<p>{data.job}</p>

    </div>
  )
}

export default Avatar