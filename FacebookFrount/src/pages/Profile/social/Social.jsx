import { IconButton } from "@mui/material";
import  style from "./social.module.scss";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
import { useEffect, useState } from "react";
import { getProfile } from "../../../Api/profile.api";



const Social = () => {


  const [data, setData] = useState([]);

  useEffect(()=>{
   getProfile()
   .then((res)=>{
  setData({LinkInstagram:res.LinkInstagram,LinkTwitter:res.LinkTwitter,LinkFaceBook:res.LinkFaceBook
   })
   }) 
   .catch((err) => alert(err));
  },[])
  return (
    <div className={style.container}>
      <a href={data.LinkFaceBook} target='_blank'  rel='noreferrer' >
        <IconButton aria-label="share" className={style.IconButton}>
          <Facebook />
        </IconButton>
      </a>

      <a href={data.LinkTwitter} target="_blank" rel="noreferrer">
        <IconButton aria-label="share" className={style.IconButton}>
          <Twitter />
        </IconButton>
      </a>

      <a href={data.LinkInstagram} target="_blank" rel="noreferrer">
        <IconButton aria-label="share" className={style.IconButton}>
          <Instagram />
        </IconButton>
      </a>
    </div>
  );
};

export default Social;
