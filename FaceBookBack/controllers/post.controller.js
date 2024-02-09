import postModel from "../models/post.model.js";

export const create = async (req, res) => {
  const body = req.body;
  const result = await postModel.create({...body,user:req.user.id});
  
  res.send(result);
};

export const getPost = async (req, res) => {
  const posts = await postModel.find();
  res.send(posts);
};

//details

export const getDetails = async (req, res) => {
  const postId = req.params.id;

  //const details = await postModel.findOne({ _id:postId });
  const detailsId = await postModel.findById(postId);

  //res.send(details);
  res.send(detailsId);
};

export const editLike = async (req, res) => {
  const postId = req.params.id;

  const postLike = await postModel.findByIdAndUpdate(postId, {
    $inc: { likeCount: + 1 } ,
  });

  res.send(postLike);
};

export const deletePost = async (req, res) => {
  const postId = req.params.id;
  const delPost = await postModel.findByIdAndDelete(postId);
  res.send(delPost);
};
