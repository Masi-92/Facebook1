import  { useEffect, useState } from "react";
import style from "./gallery.module.scss";
import { useParams } from "react-router-dom";
import { getPost, getPostById } from "../../../Api/postApi"; // Removed unused import

const Gallery = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getPostById(id) 
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
              {post.images.map((image, index) => (
                <img key={index} src={image} alt="" />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Gallery;
