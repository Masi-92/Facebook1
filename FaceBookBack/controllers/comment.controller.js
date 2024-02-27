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
