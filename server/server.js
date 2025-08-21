import cors from "cors";
import "dotenv/config";
import connectDb from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";

// server
import express from "express";
const app = express();

// middlewares
app.use(cors());
app.use(express.json());

//mongose
await connectDb();

// routes
app.get("/", (req, res) => res.send("its alive"));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);

// run server port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running");
});

export default app;
