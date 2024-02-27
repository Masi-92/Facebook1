import { CardMedia, Modal } from "@mui/material";
import style from  "./modalpost.module.scss"
const ModalPost = ({ open, onClose, post }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={style.modalpost}>
        <CardMedia />

        <div className={style.text}>{post.text} </div>
        <img className={style.img} src={post.image} alt="" />
      </div>
    </Modal>
  );
};

export default ModalPost;