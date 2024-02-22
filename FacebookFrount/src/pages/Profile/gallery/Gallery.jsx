import  { useEffect, useState } from "react";
import style from "./gallery.module.scss";
import { useParams } from "react-router-dom";
import {  getMyPost } from "../../../Api/postApi"; 


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
  },[id]);

  return (
    <div className={style.container}>
      {Array.isArray(data) &&
        data.map((post) => (
          <div key={post.id} className={style.post}>
            <h1>{post.text}</h1>
            <div className={style.images}>
             
                <img  src={post.image} alt="" />
                <p>{post.user}</p>
              
            </div>
          </div>
        ))}
    </div>
  );
};

export default Gallery;
