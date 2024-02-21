import { useState } from "react";
import { addPost } from "../../Api/postApi";
import { TextField } from "@mui/material";
import style from "./addpost.module.scss";
import { useNavigate } from "react-router-dom";
import InputImage from "../../component/SwipeableDrawer/editeProfile/uplaud/inputImage";

const AddPost = () => {
  const [post, setPost] = useState({
    image: "",
    text: "",
  });

  const navigate = useNavigate();
  //neu Avatar

  const handleAddNewPost = () => {
    addPost(post)
      .then((res) => {
        setPost({
          image: res.data.image,
          text: res.data.text,
        });
      })
      .catch(() => {
        alert("Invalid post");
      });
    navigate("/Home");
  };

  const handleChangeImage = (value) => {
    setPost((prevProfile) => ({
      ...prevProfile,
      image: value,
    }));
  };
  function handleText(event) {
    const { value } = event.target;
    setPost((prevState) => ({
      ...prevState,
      text: value,
    }));
  }
  return (
    <div className={style.container}>
      {/* <img
        src="https://source.unsplash.com/random?wallpapers"
        alt="Random Wallpaper"
      /> */}
      <InputImage setValue={handleChangeImage} value={post.image} />
      {/* <TextField
        onChange={(e) => setImage(e.target.value)}
        value={image}
        margin="normal"
        fullWidth
        id="image"
        label="Image URL"
      /> */}

      <TextField
        onChange={handleText}
        value={post.text}
        margin="normal"
        required
        fullWidth
        type="text"
        id="text"
      />

      <button className={style.button} onClick={handleAddNewPost}>
        {" "}
        Add post
      </button>
    </div>
  );
};

export default AddPost;
