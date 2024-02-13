import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./utils/mongodb.js";
import router from "./routers/post.router.js";
import authRouter from "./routers/auth.router.js";
import cors from "cors";


const app = express();
const PORT = process.env.PORT;



app.use(cors());
app.use(express.json());
app.use("/api/post", router);
app.use("/api/auth",authRouter)


app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}`);
});
