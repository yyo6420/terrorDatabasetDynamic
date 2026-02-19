import express from "express";
import morgam from "morgan";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(morgam("tiny"));

app.get("/", async (request, response) => {
  response.json({
    message: "Welcome to Terror Data List API",
    version: "1.0.0",
  });
});

app.listen(PORT, async () => {
  console.log(`listening on port ${PORT}`);
});