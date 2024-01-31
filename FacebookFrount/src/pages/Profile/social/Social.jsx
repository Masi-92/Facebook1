import { IconButton } from "@mui/material";
import  style from "./social.module.scss";
import Facebook from "@mui/icons-material/Facebook";
import Twitter from "@mui/icons-material/Twitter";
import Instagram from "@mui/icons-material/Instagram";
const Social = ({ twitter, facebook, instagram }) => {
  return (
    <div className={style.container}>
      <a href={facebook} target='_blank'  rel='noreferrer' >
        <IconButton aria-label="share" className={style.IconButton}>
          <Facebook />
        </IconButton>
      </a>

      <a href={twitter} target="_blank" rel="noreferrer">
        <IconButton aria-label="share" className={style.IconButton}>
          <Twitter />
        </IconButton>
      </a>

      <a href={instagram} target="_blank" rel="noreferrer">
        <IconButton aria-label="share" className={style.IconButton}>
          <Instagram />
        </IconButton>
      </a>
    </div>
  );
};

export default Social;
