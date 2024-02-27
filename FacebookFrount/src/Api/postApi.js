import myApi from "./api";

export const getPost = () => {
  return myApi.get("/post");
};

export const getDetails = (id) => {
  return myApi.get("/post/" + id);
};

export const editLike = (id) => {
  return myApi.put("/post/" + id);
};

export const deletePost = (id) => {
  return myApi.delete("/post/" + id);
};

export const addPost = (body) => {
  return myApi.post("/post", body);
};

export const getMyPost = () => {
  return myApi.get(`/post/myPosts`);
};

export const getOthersPost = (id) => {
  return myApi.get(`/post/getPosts/${id}`);
};

export const editPostsById = (id,body) => {
  return myApi.put(`/post/editPost/${id}`,body);
};
