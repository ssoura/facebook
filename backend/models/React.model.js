import mongoose from "mongoose";

const reactSchema = new mongoose.Schema({
  react: {
    type: String,
    enum: ["like", "love", "haha", "sad", "angry", "wow"],
    required: true,
  },
  postRef: {
    type: mongoose.Schema.ObjectId,
    ref: "Post",
  },
  reactBy: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
});

const React = mongoose.model("React", reactSchema);
export default React;
