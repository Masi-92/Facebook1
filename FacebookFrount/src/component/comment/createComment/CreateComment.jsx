import { useState } from "react";
import { TextField } from "@mui/material";
import { createComment } from "../../../Api/comment.api";
import style from "../getComment/getComment.module.scss"
const CreateComment = ({ postId, Countcomment, updateData }) => {
  const [comment, setComment] = useState({
    text: "",
    post: postId,
  });

  const handleAddNewComment = () => {
    createComment(comment)
      .then((res) => {
        setComment({
          text: res.data.text,
        });
        updateData();
      })
      .catch(() => {
        alert("Invalid post");
      });
  };

  function handleText(event) {
    const { value } = event.target;
    setComment((prevState) => ({
      ...prevState,
      text: value,
    }));
  }

  return (
    <div>
      <TextField
        onChange={handleText}
        value={comment.text}
        margin="normal"
        required
        fullWidth
        type="text"
        id="text"
      />

      <button className={style.button} onClick={handleAddNewComment}>Add Comment</button>
    </div>
  );
};

export default CreateComment;
