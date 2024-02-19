import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/user_crud")
  .then((res) => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log("mongodb connection failed");
  });
