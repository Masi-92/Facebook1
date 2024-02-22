import {  useEffect, useState } from "react";
import About from "./about/About";
import Avatar from "./avatar/Avatar";
import Count from "./count/Count";
import Gallery from "./gallery/Gallery";
import Social from "./social/Social";
import style from "./Profile.module.scss";
import { getProfile } from "../../Api/profile.api";

const Profile = () => {
  const [data, setData] = useState();


  useEffect(() => {
    getProfile()
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

export default Profile;
