import { useState } from "react";
import { addPost } from "../../Api/postApi";
import { IconButton, TextField } from "@mui/material";
import style from "./addpost.module.scss";

const AddPost = () => {
  //const [username, setUsername] = useState("");
  //const [avatar, setAvatar] = useState("");
  //const [likeCount, setLikeCount] = useState("");
  const [image, setImage] = useState("");
  const [text, setText] = useState("");

  //neu Avatar

  const handleAddNewPost = () => {
    const body = {
     text,
      image,
    };
    addPost(body)
      .then(() => {
        alert("Your post is created");
      })
      .catch(() => {
        alert("Invalid post");
      });
  };

  return (
    <div className={style.container}>
      {/* <TextField
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        margin="normal"
        required
        fullWidth
        name="username"
        label="Username"
        type="text"
      /> */}
      {/* <TextField
        onChange={(e) => setAvatar(e.target.value)}
        value={avatar}
        margin="normal"
        required
        fullWidth
        id="avatar"
        label="Avatar"
      /> */}


      {/* <TextField
        onChange={(e) => setLikeCount(e.target.value)}
        value={likeCount}
        margin="normal"
        required
        fullWidth
        id="likeCount"
        label="Like Count"
        type="number"
      /> */}
      <img
        src="https://source.unsplash.com/random?wallpapers"
        alt="Random Wallpaper"
      />
      <TextField
        onChange={(e) => setImage(e.target.value)}
        value={image}
        margin="normal"
        fullWidth
        id="image"
        label="Image URL"
      />
      <TextField
        onChange={(e) => setText(e.target.value)}
        value={text}
        margin="normal"
        required
        fullWidth
        type="text"
        id="text"
      />
      <IconButton
        onClick={handleAddNewPost}
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, color: "#7f11e1" }}
      >
        Add Post
      </IconButton>
    </div>
  );
};

export default AddPost;
