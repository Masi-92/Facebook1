import mongoose from "mongoose";
import postModel from "../models/post.model.js";

export const create = async (req, res) => {
  const body = req.body;
  const result = await postModel.create({ ...body, user: req.user.id });

  res.send(result);
};

export const getPost = async (req, res) => {
  const posts = await postModel.find().populate("user").sort({ _id: -1 });
  res.send(posts);
};

//details

export const getDetails = async (req, res) => {
  const postId = req.params.id;
  const validId = mongoose.Types.ObjectId.isValid(postId);
  if (!validId) {
    return res.status(400).send({ msg: "error Id ist not Valid" });
  }
  //const details = await postModel.findOne({ _id:postId });
  const detailsId = await postModel.findById(postId);

  //res.send(details);
  res.send(detailsId);
};

export const editLike = async (req, res) => {
  const postId = req.params.id;

  const postLike = await postModel.findByIdAndUpdate(postId, {
    $inc: { likeCount: +1 },
  });

  res.send(postLike);
};

export const deletePost = async (req, res) => {
  const userId = req.user.id;
  const postId = req.params.id;
  const delPost = await postModel.findOneAndDelete({
    _id: postId,
    user: userId,
  });
  res.send(delPost);
};

/* 
  export const getPostById  = async (req, res) => {
    try {
      const userId = req.params.id;
      const posts = await postModel.find({ user: mongoose.Types.ObjectId(userId) }).populate("user");
  
      if (!posts || posts.length === 0) {
        return res.status(404).send({ message: "No posts found for this user" });
      }
      res.send(posts);
    } catch (error) {
      console.error("Error fetching posts by user ID:", error);
      res.status(500).send({ message: "Error fetching posts by user ID" });
    }
  };
 */

export const getMyPost = async (req, res) => {
  try {
    const userId = req.user.id;
    const posts = await postModel.find({ user: userId }).sort({ _id: -1 });

    res.send(posts);
  } catch (error) {
    console.error("Error fetching posts by user ID:", error);
    res.status(500).send({ message: "Error fetching posts by user ID" });
  }
};

export const getOthersPost = async (req, res) => {
  const userId = req.params.id;
  const postList = await postModel.find({ user: userId }).populate("user");
  res.send(postList);
};

export const editPost = async (req, res) => {
  const userId = req.user.id;
  const postId = req.params.id;
  const post = await postModel.findOneAndUpdate(
    { user: userId, _id: postId },
    { $set: req.body },
    { new: true }
  );

  console.log(post);
  res.send(post);
};
