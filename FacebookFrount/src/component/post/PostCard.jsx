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
import { Badge } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
//import Profile  from "../../pages/Profile"
import { useNavigate } from "react-router-dom";
//import { useState } from "react";

import { editLike } from "../../Api/postApi";
//import { useEffect } from "react";

export default function PostCard({ post, getData }) {
  const navigate = useNavigate();
  //const [countLike,setCountLike] =  useState (post.likeCount)
 
  const handelOthersPro= ()=>{
    navigate(`/GetOthersProfile/${post.user._id}`)

  }
  
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
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src={post.user.avatar} sx={{ bgcolor: red[500] }} aria-label="recipe" onClick={()=>handelOthersPro()} >
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={post.user.fullName}
        subheader={post.createdAt}
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

        <IconButton aria-label="share" >
          <ShareIcon />
        </IconButton>
         
        <EditIcon/>
      </CardActions>
    </Card>
  );
}
