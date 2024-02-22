import {  useEffect, useState } from "react";
import About from "../Profile/about/About";
import Avatar from "../Profile/avatar/Avatar";
import Count from "../Profile/count/Count";
import Gallery from "../Profile/gallery/Gallery";
import Social from "../Profile/social/Social";
import style from "./OthersProfile.module.scss";
import { getOthersProfile  } from "../../Api/profile.api";

const OthersProfile= () => {
  const [data, setData] = useState();


  useEffect(() => {
    getOthersProfile ()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => alert(err));
  }, []);

  if (!data) {
    return <p>loding </p>;
  }
 


  return (
    <div>
      <div className={style.background}>
        <Avatar avatar={data.avatar} job={data.job} name={data.fullName} />
        <Count
          comment={data.commentCount}
          like={data.likeCount}
          post={data.postCount}
        />
        <Social
          twitter={data.LinkTwitter}
          instagram={data.LinkInstagram}
          facebook={data.linkFaceBook}
        />
        <div className={style.overlay} style={{ backgroundImage: `url(${data.background})`}}></div>
      </div>

      <About about={data.about} />


  

      
      <Gallery />
    </div>
  );
};

export default OthersProfile;
