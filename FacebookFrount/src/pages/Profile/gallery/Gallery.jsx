import { IconButton } from "@mui/material";
import CollectionsIcon from "@mui/icons-material/Collections";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import PublicIcon from "@mui/icons-material/Public";
import { useState } from "react";
import style from "./gallery.module.scss"
import { ClassNames } from "@emotion/react";

const Gallery = ({ travel, sport, hubby }) => {

  const [image,setImage] = useState([]);

 
   
  return (
    <div className={style.container} >
   <div >   <IconButton aria-label="share" className={style.CollectionsIcon} onClick={()=>{setImage(travel)}}>
        <CollectionsIcon    style={{
    display: travel ? "block" : "none",
  }}
  className={travel ? style.CollectionsIcon : ''} />
      </IconButton>

      <IconButton aria-label="share"  onClick={()=>{setImage(sport)}}>
        <DirectionsRunIcon />
      </IconButton>
      <IconButton aria-label="share"  onClick={()=>{setImage(hubby)}} >
        <PublicIcon />
      </IconButton> </div>

<div  className={style.containerImag}>
{image.map((item,index)=>{

return <img src={item} key={index} style={{width:"400px"}}  />
})}


</div>
  
    </div>
  );
};

export default Gallery;
