import myApi from "./api";

export const getPost = () => {
  return myApi.get("/post");
};

export const getDetails = (id) => {
  return myApi.get("/post/" + id);
};


export const editLike = (id)=>{

    return myApi.put("/post/"+id)

}

  export const deletePost = (id)=>{
return myApi.delete("/post/"+id)

  }