import { CardMedia } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import style from "./post/details.module.scss";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useParams } from "react-router-dom";
import { editLike, getDetails } from "../Api/postApi";

export const Details = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    getDetails(id).then((res) => {
      setData(res.data);
    });
  };
  const handleLike = () => {
    editLike(data._id)
      .then(() => {
        getData();
      })
      .catch(() => {
        console.error("error");
      });
  };
  //jedes mal wenn id sich ändert wird neue gerendert
  //???????

  return (
    <div className={style.details}>
      <CardContent>
        <span> {data.username}</span>
        <Typography variant="body2" color="text.secondary">
          {data.text}
        </Typography>

        <span>
          Like:{data.likeCount}{" "}
          <FavoriteIcon style={{ color: "red" }} onClick={handleLike} />
        </span>
      </CardContent>

      <CardMedia
        component="img"
        height="194"
        image={data.image + "?date=" + new Date().getTime()}
        alt={data.username}
      />
    </div>
  );
};
