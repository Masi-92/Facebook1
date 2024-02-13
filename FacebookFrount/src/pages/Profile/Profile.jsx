import { useEffect, useState } from "react";
import About from "./about/About";
import Avatar from "./avatar/Avatar";
import Count from "./count/Count";
import Gallery from "./gallery/Gallery";
import Social from "./social/Social";
import ProfileData from "./Profile.json";
import style from "./Profile.module.scss";
import { getProfile } from "../../Api/profile.api";
const Profile = () => {
  const [data, setData] = useState(ProfileData);

useEffect(()=>{
 getProfile()
 .then((res)=>{
setData(res.data)
 }) 
 .catch((err) => alert(err));
},[])
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
          twitter={data.social.twitter}
          instagram={data.social.instagram}
          facebook={data.social.facebook}
        />
        <div className={style.overlay}></div>
      </div>

      <About about={data.about} />
      <Gallery travel={data.travel} sport={data.sport} hubby={data.hubbies} />
    </div>
  );
};

export default Profile;
