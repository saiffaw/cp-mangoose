import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import router from "./router.js";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("coonect to mongodb");
  } catch (error) {
    throw error;
  }
};

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api", router);
const port = process.env.PORT;

mongoose.connection.on("disconnected", () => {
  console.log("mogodb disconnected");
});
mongoose.connection.on("connected", () => {
  console.log("mogodb connected");
});
app.listen(port, () => {
  console.log(`connect on port ${port}`);
  connect();
});
