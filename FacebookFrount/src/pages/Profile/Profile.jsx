import {  useState } from "react";
import About from "./about/About";
import Avatar from "./avatar/Avatar";
import Count from "./count/Count";
import Gallery from "./gallery/Gallery";
import Social from "./social/Social";
//import ProfileData from "./Profile.json";
import style from "./Profile.module.scss";

const Profile = () => {
  const [data, setData] = useState();

<<<<<<< HEAD
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
 
=======
// useEffect(()=>{
//  getProfile()
//  .then((res)=>{
// setData({fullName:res.data.fullName})
//  }) 
//  .catch((err) => alert(err));
// },[])
>>>>>>> af22506448337d5fb99029827926fafbfb602465
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
        <div className={style.overlay}></div>
      </div>

      <About about={data.about} />
      <Gallery travel={data.travel} sport={data.sport} hubby={data.hubbies} />
    </div>
  );
};

export default Profile;
