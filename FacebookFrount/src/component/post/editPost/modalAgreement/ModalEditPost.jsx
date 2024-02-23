import { Modal, TextField, Button } from "@mui/material";
import { useEffect, useState } from "react";
import style from "./modalAgreement.module.scss";
import { toast } from "react-toastify";
import { editProfile } from "../../../../Api/postApi";
import InputImage from "../../../SwipeableDrawer/editeProfile/uplaud/inputImage";

const ModalEditPost = ({ open, onClose, id }) => {
  const [editPost, setEditPost] = useState({
    name: "", 
    description: "", 
    bio: "", 
    avatar: "",
    text: "",
    image: "",
  });  console.log(id)

  useEffect(() => {
    if (id) {
      editProfile(id)
        .then((res) => {
          setEditPost(res.data);
        })
        .catch((err) => toast.error(err));
    }
  }, [id]);
  const handleEditPost = () => {
    editProfile(id, editPost)
      .then(() => {
        toast.success("Profile updated successfully!");
      })
      .catch(() => {
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
      avatar: value,
    }));
  };
  return (
    <Modal open={open} onClose={onClose}>
      <div className={style.modal}>
        <h3>Edit Post</h3>
        <div>
          <TextField
            name="name"
            label="Full Name"
            onChange={handleChangeEditPost}
            value={editPost.name}
          />
          <TextField
            name="description"
            label="Description"
            onChange={handleChangeEditPost}
            value={editPost.description}
          />
          <TextField
            name="bio"
            label="Bio"
            onChange={handleChangeEditPost}
            value={editPost.bio}
          />
          <Button variant="contained" onClick={handleEditPost}>
            Save
          </Button>
          <InputImage setValue={handleChangeImage} value={editPost.avatar} />
        </div>
      </div>
    </Modal>
  );
};
export default ModalEditPost;
