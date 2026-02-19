import express from "express";
import morgam from "morgan";
import terrorDataRoutes from "./src/routes/terrorData.routes.js"

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(morgam("tiny"));

app.use("/api/terrorData", terrorDataRoutes)

app.get("/", async (request, response) => {
  response.json({
    message: "Welcome to Terror Data List API",
    version: "1.0.0",
  });
});

app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`);
});