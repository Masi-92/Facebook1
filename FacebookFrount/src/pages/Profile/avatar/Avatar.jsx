import { useEffect, useState } from "react";
import style from "./avatar.module.scss"
import { getProfile } from "../../../Api/profile.api";
import { useNavigate } from "react-router-dom";


const Avatar = () => {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  const handelOthersPro= ()=>{
    navigate("/GetOthersProfile")

  }
  


useEffect(()=>{
 getProfile()
 .then((res)=>{
setData({fullName:res.data.fullName,
job:res.data.job,avatar:res.data.avatar})
 }) 
 .catch(() => alert("fehler is da"));
},[])

  return (
    <div className={style.container}>
<img  src={data.avatar}alt=""   onClick={()=>handelOthersPro()} />
<h1>{data.fullName}</h1>
<p>{data.job}</p>

    </div>
  )
}

export default Avatar