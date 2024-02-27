import { useEffect, useState } from "react";
import About from "./about/About";
import Avatar from "./avatar/Avatar";
import Count from "./count/Count";
import Gallery from "./gallery/Gallery";
import Social from "./social/Social";
import style from "./Profile.module.scss";
import { getProfile } from "../../Api/profile.api";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
const Profile = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const handelEdit = () => {
    navigate("/editProfile");
  };
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
      <div
        style={{ display: "flex", alignItems: "center", justifyContent: "end" }}
      >
        <button onClick={() => handelEdit()} className={style.button}>
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path
            fill="currentColor"
            d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
          ></path>
          Edit Profile
        </button>
      </div>

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
        <div
          className={style.overlay}
          style={{ backgroundImage: `url(${data.background})` }}
        ></div>
      </div>

      <About about={data.about} />

      <Gallery />
    </div>
  );
};

export default Profile;
