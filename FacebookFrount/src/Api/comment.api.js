
import myApi from "./api";

export const createComment = (body) => {
    return myApi.post("/comment", body);
}


export const getCommentByPostId = (id) =>{
return myApi.get(`/comment/${id}`)
}