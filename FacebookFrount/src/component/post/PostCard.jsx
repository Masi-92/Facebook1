import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Badge, Menu, MenuItem } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import CommentIcon from "@mui/icons-material/Comment";
import { useNavigate } from "react-router-dom";
import { deletePost, editLike } from "../../Api/postApi";
import ModalEditPost from "./editPost/modalAgreement/modalEditPost";
import { useState } from "react";
import { getUserId } from "../../utils/utils";
import dayJs from "dayjs";
import CreateComment from "../comment/CreateComment";



export default function PostCard({ post, getData, updateData ,Countcomment}) {
  //shahab
  // const [open1, setOpen1] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const openOP = Boolean(anchorEl);
  const userId = getUserId();

  //shahab
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handelOthersPro = () => {
    if (post.user._id === userId) {
      return navigate(`/profile`);
    } else {
      navigate(`/GetOthersProfile/${post.user._id}`);
    }
  };

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //shahab
  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  function handleview() {
    setOpen1(true);
  }
  // Delelt

  const handelDelete = () => {
    deletePost(post._id)
      .then(() => {
        updateData();
        handleClose();
      })
      .catch(() => {
        console.error("error");
      });
  };

  const handleLike = () => {
    editLike(post._id)
      .then(() => {
        getData();
      })
      .catch(() => {
        console.error("error");
      });
  };

  const handleDetails = (id) => {
    navigate(`/details/${id}`);
  };

  // AddComment

  /* 
  const handleAddComment = ()=>{
navigate("/CreateComment")

  } */
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            src={post.user.avatar}
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            onClick={() => handelOthersPro()}
          >
            R
          </Avatar>
        }
        action={
          <IconButton onClick={handleClick2} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.user.fullName}
        //Date
        subheader={dayJs(post.createdAt).format("DD.MM.YYYY")}
      />

      <CardMedia
        component="img"
        height="194"
        image={post.image + "?date=" + new Date().getTime()}
        alt={post.username}
        //??????
        onClick={() => handleDetails(post._id)}
        //onClick={handleDetails()}
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Badge badgeContent={post.likeCount} color="secondary">
          <IconButton aria-label="add to favorites" onClick={handleLike}>
            <FavoriteIcon />
          </IconButton>
        </Badge>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <Badge badgeContent={post.comment} color="secondary">
        <IconButton aria-label="share">
          <CommentIcon />
        </IconButton>
        </Badge>
        {/* AddComment */}
        {/*   <CommentIcon onClick={handleAddComment} /> */}

        <ModalEditPost
          onClose={() => {
            setOpen(false);
          }}
          open={open}
          post={post}
          updateData={updateData}
        />
      </CardActions>
      {/*     <ModalPost post={post} onClose={() => setOpen(false)} open={open} /> */}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openOP}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>

        {post.user._id === userId && (
          <>
            <MenuItem onClick={() => handleOpenModal()}>EDITPOST</MenuItem>
            <MenuItem onClick={handelDelete}>Delete Post</MenuItem>
          </>
        )}
      </Menu>
      <CreateComment postId={post._id} />
    </Card>
  );
}
