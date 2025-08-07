import express from "express";
import "dotenv/config";
const app = express();
import cors from "cors";

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.get("/", (req, res) => res.send("its alive"));

// run server port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("server running");
});

export default app;
