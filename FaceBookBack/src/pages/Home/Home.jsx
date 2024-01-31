import { useEffect, useState } from "react";
import PostCard from "../../component/post/PostCard";


import style from "./home.module.scss";
import { getPost } from "../../Api/postApi";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
 getData()
  }, []);

   const getData=()=>{

   getPost()
      .then((res) => {
        setData(res.data);
      });


  }
  return (
    <div>
      Home
      <div className={style.container}>
        {data.map((post, indx) => {
          return <PostCard post={post} key={indx} getData={getData}/>;
        })}
      </div>
    </div>
  );
};

export default Home;
