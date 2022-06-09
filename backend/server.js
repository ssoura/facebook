import express, { json } from "express";
import connectDB from "./config/db.js";
import cors from "cors";
import fileUpload from "express-fileupload";
import dotenv from "dotenv";
dotenv.config();

import post from "./routes/post.route.js";
import react from "./routes/react.route.js";
import upload from "./routes/upload.route.js";
import user from "./routes/user.route.js";

//database
connectDB();

const app = express();
app.use(json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);

// console.log(process.env.TOKEN_SECRET);
//routes
app.use("/api/post", post);
app.use("/api/react", react);
app.use("/api/upload", upload);
app.use("/api/user", user);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
