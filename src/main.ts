import express from "express";
import dotenv from "dotenv";
import userRouter from "./routers/userRoute";
import './infrastructure/mongodb/dbConnection'
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", userRouter);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server started ${process.env.SERVER_PORT}`);
});
