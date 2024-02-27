import { Modal, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import style from "./modalAgreement.module.scss";
import { toast } from "react-toastify";

import InputImage from "../../../SwipeableDrawer/editeProfile/uplaud/inputImage";
import { editPostsById } from "../../../../Api/postApi";

const ModalEditPost = ({ open, onClose, post, updateData }) => {
  const [editPost, setEditPost] = useState({
    text: "",
    image: "",
  });

  useEffect(() => {
    if (post) {
      //setEditPost({text:post.text,image:post.image})
      //or
      setEditPost(post);
    }
  }, []);

  const handleEditPost = () => {
    editPostsById(post._id, editPost)
      .then(() => {
        toast.success("Profile updated successfully!");
        updateData();
        onClose()
      })
      .catch((err) => {
        console.log(err)
        toast.error("Failed to update profile. Please try again.");
      });
  };
  const handleChangeEditPost = (e) => {
    const { name, value } = e.target;
    setEditPost((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };
  const handleChangeImage = (value) => {
    setEditPost((prevProfile) => ({
      ...prevProfile,
      image: value,
    }));
  };
  return (
    <Modal open={open} onClose={onClose}>
      <div className={style.modal}>
        <h3>Edit Post</h3>
        <div>
          <TextField
            name="text"
            label="text"
            onChange={handleChangeEditPost}
            value={editPost.text}
          />
          <Button variant="contained" onClick={handleEditPost}>
            Save
          </Button>
          <InputImage setValue={handleChangeImage} value={editPost.image} />
        </div>
      </div>
    </Modal>
  );
};
export default ModalEditPost;
