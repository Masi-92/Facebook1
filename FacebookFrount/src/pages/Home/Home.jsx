import { useEffect, useState } from "react";
import PostCard from "../../component/post/PostCard";

import style from "./home.module.scss";
import { getPost } from "../../Api/postApi";
import { Button, IconButton } from "@mui/material";
//import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData();
  }, []);


  
  const getData = () => {
    getPost().then((res) => {
      setData(res.data);
    });
  };

  const handelClick = () => {
    navigate("/add");
  };
  return (
    <div>
      <header className={style.header}>
        <h1>Home</h1>
        <IconButton>
          <Button onClick={() => handelClick()} className={style.btn}>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                ></path>
              </svg>{" "}
              Add Post
            </span>
          </Button>
        </IconButton>
      </header>
      <div className={style.container}>
        {data.map((post, indx) => {
          return <PostCard post={post} key={indx} getData={getData} />;
        })}
      </div>
    </div>
  );
};

export default Home;
