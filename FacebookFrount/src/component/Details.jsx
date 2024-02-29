import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import style from "./post/details.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from "react-router-dom";
import { deletePost, editLike, getDetails } from "../Api/postApi";
import GetComment from "./comment/getComment/GetComment";



export const Details = () => {
  const [post, setPost] = useState({});
  const { id } = useParams();
const navigate = useNavigate()
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getDetails(id).then((res) => {
      setPost(res.data);
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

  const handelDelete =()=>{
deletePost(post._id)
.then(()=>{
  navigate(-1)
})
.catch(()=>{
  console.error("error");
})

  }

  //jedes mal wenn id sich ändert wird neue gerendert
  //???????

  return (
    <div className={style.details}>
      <CardContent>
        <span> {post.username}</span>
        <Typography variant="body2" color="text.secondary">
          {post.text}
        </Typography>

        <span>
          Like:{post.likeCount}{" "}
          <FavoriteIcon style={{ color: "red" }} onClick={handleLike} />
        </span>
       <DeleteIcon  onClick = {handelDelete}/>
      </CardContent>

      <CardMedia
        component="img"
        height="194"
        image={post.image + "?date=" + new Date().getTime()}
        alt={post.username}
      />
     
       <GetComment postId={id}/>
    </div>
  );
};
