import { IconButton } from "@mui/material";
import  style from "./social.module.scss";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";



const Social = ({LinkInstagram,LinkTwitter,LinkFaceBook}) => {



  return (
    <div className={style.container}>
      <a href={LinkFaceBook} target='_blank'  rel='noreferrer' >
        <IconButton aria-label="share" className={style.IconButton}>
          <Facebook />
        </IconButton>
      </a>

      <a href={LinkTwitter} target="_blank" rel="noreferrer">
        <IconButton aria-label="share" className={style.IconButton}>
          <Twitter />
        </IconButton>
      </a>

      <a href={LinkInstagram} target="_blank" rel="noreferrer">
        <IconButton aria-label="share" className={style.IconButton}>
          <Instagram />
        </IconButton>
      </a>
    </div>
  );
};

export default Social;
