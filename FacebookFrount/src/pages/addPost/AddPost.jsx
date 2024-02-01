import { useState } from "react";
import { addPost } from "../../Api/postApi";
import { TextField } from "@mui/material";

const AddPost = () => {
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [likeCount, setLikeCount] = useState("");
  const [image, setImage] = useState("");
  const [time, setTime] = useState("");

  const addNewPost = () => {
    const body = {
      username,
      avatar,
      likeCount,
      image,
      time,
    };
    addPost(body)
    .then(()=>{

        alert("your post is created")
    }).catch(()=>{
        alert("invalid post ")
    })
  };

  return <div>

<TextField
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          margin="normal"
          required
          fullWidth
          name="username"
          label="username"
          type="text"
          id="password"
          autoComplete="current-password"
        />
   <TextField
          onChange={(e) => setAvatar(e.target.value)}
          value={avatar}
          margin="normal"
          required
          fullWidth
          id="avatar"
          label="Avatar"
          name="avatar"
          autoComplete="avatar"
          autoFocus
        />
  </div>;
};

export default AddPost;
