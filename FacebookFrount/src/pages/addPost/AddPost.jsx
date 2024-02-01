import { useState } from "react";
import { addPost } from "../../Api/postApi";
import { Button, IconButton, TextField } from "@mui/material";
import style from "./addpost.module.scss"

const AddPost = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [likeCount, setLikeCount] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");

  //neu Avatar
const handleAvatarClick= (avatar)=>{

setAvatar(avatar)

}

  const handleAddNewPost = () => {
    const body = {
      username,
      avatar,
      likeCount,
      image,
      time,
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
      <TextField
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        margin="normal"
        required
        fullWidth
        name="username"
        label="Username"
        type="text"
      />
      <TextField
        onChange={(e) => setAvatar(e.target.value)}
        value={avatar}
        margin="normal"
        required
        fullWidth
        id="avatar"
        label="Avatar"
      />

<div>
<input type="
file"
accept="image"
onChange={(e) => handleAvatarClick(e.target.files[0])}
style={{display:"none"}}
id="avatar-input"
/>


</div>

      <TextField
        onChange={(e) => setLikeCount(e.target.value)}
        value={likeCount}
        margin="normal"
        required
        fullWidth
        id="likeCount"
        label="Like Count"
        type="number"
      />
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
        onChange={(e) => setTime(e.target.value)}
        value={time}
        margin="normal"
        required
        fullWidth
        type="date"
        id="time"
       
      />

      <IconButton
        onClick={handleAddNewPost}
        type="button"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2, color:"#7f11e1"}}
      >
        Add Post
      </IconButton>
    </div>
  );
};

export default AddPost;
