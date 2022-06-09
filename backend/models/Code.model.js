import mongoose from "mongoose";

const codeSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
});

const Code = mongoose.model("Code", codeSchema);
export default Code;
