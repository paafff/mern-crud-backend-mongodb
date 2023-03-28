import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/userRoute.js";

const app = express();

mongoose.connect("mongodb://localhost:27017/mern_crud", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("database connected bang..."));

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log("server jalan bang..."));
