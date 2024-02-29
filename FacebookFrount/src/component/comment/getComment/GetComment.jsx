import { useEffect, useState } from "react";
import { getCommentByPostId } from "../../../Api/comment.api";
import CreateComment from "../createComment/CreateComment";
import { Avatar } from "@mui/material";
import style from "./getComment.module.scss";
const GetComment = ({ postId }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getComment();
  }, []);

  const getComment = () => {
    getCommentByPostId(postId).then((res) => {
      setCommentList(res.data);
    });
  };

  return (
    <div >
      <CreateComment postId={postId} updateData={getComment} />
      <ul className={style.container}>
        {commentList.map((item, index) => {
          console.log(item);
          return (
            <li key={index} style={{border:"2px solid ",borderRadius:"4px"}}>
              <div className={style.name}>
                {" "}
                <Avatar src={item.user.avatar} style={{marginRight:".5rem"}} /> <p>{item.user.fullName}</p> 
              </div>
              <div className={style.text}> {item.text}</div>
            </li>
          );
        })} 
      </ul>
    </div>
  );
};

export default GetComment;
