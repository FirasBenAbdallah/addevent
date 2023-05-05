import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import eventRoutes from "./routes/event.js";
import PublicationRoute2 from "./routes/publication2.js";

dotenv.config();

const PORT = process.env.PORT || 3001;
const DBNAME = process.env.DBNAME;

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/miniproj", {
  authSource: "",
  user: "",
  pass: "",
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/** USER */
app.use("/user", userRoutes);
app.use("/user/signup", userRoutes);
app.use("/user/login", userRoutes);
app.use("/user/modify", userRoutes);

/** EVENT */
app.use("/event", eventRoutes);
app.use("/event/getevents", eventRoutes);
app.use("/event/addevent", eventRoutes);

app.use("/Publication2", PublicationRoute2);

app.listen(PORT, () => {
  console.log(`listening to port 3001 ${DBNAME}`);
});
