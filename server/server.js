import express from "express";
import "dotenv/config";
const app = express();
import cors from "cors";
import connectDb from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";

// middlewares
app.use(cors());
app.use(express.json());

//mongose
await connectDb();

// routes
app.get("/", (req, res) => res.send("its alive"));
app.use("/api/admin", adminRouter);

// run server port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running");
});

export default app;
