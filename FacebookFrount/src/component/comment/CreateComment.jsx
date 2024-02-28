
import { useState } from "react";
import { TextField } from "@mui/material";
import { createComment } from "../../Api/comment.api";





const CreateComment = ({postId,Countcomment}) => {
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

      <button onClick={handleAddNewComment}>Add Comment</button>
    </div>
  );
};

export default CreateComment;
