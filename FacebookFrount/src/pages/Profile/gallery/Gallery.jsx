import { useEffect, useState } from "react";
import style from "./gallery.module.scss";
import { useParams } from "react-router-dom";
import { getMyPost } from "../../../Api/postApi";
import { Avatar, Badge, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const Gallery = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getMyPost(id)
      .then((res) => {
        console.log("Response data:", res.data);
        setData(res.data);
      })
      .catch((err) => alert(err));
  }, [id]);

  return (
    <div >
    <Card sx={{ maxWidth: 345 }} className={style.container}>
      {data.map((post) => (
        <div key={post.id} className={style.post}>
          <Avatar src={post.user.avatar} sx={{ bgcolor: [500] }} aria-label="recipe">
            
            </Avatar>
          <div className={style.images}>
          <CardMedia
        component="img"
        height="194"
        image={post.image + "?date=" + new Date().getTime()}
        alt={post.username}
        //??????
        
        //onClick={handleDetails()}
      />
          </div>
            <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>
      </CardContent>
      
          <p>{post.user.username}</p>
      <CardActions disableSpacing>
        <Badge badgeContent={post.likeCount} color="secondary">
          <IconButton aria-label="add to favorites" >
            <FavoriteIcon />
          </IconButton>
        </Badge>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>


        </div>
      ))}
   </Card>
   </div>
  );
};

export default Gallery;
