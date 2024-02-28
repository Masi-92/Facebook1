import commentModel from "../models/comment.model.js";


 export const createComment = async (req, res) => {
  const userId = req.user.id;
  const body = req.body;

  const comment = await commentModel.create({
    user: userId,
    text: body.text,
    post: body.post,
  });
  res.send(comment)
};


export const getCommentByPostId = async (req, res) => {
  const postId = req.params.id;
  const comment = await commentModel.find({post:postId}).populate("user");
  res.send(comment);
};