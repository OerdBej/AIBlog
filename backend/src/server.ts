import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/test", (req: Request, res: Response) => {
  res.send("Hello from the server");
});

app.listen(3000, () => {
  console.log("Server is up BRO");
});
