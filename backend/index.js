// backend/index.js
import express from "express";
import cors from "cors";
import rootRouter from "./routes/index.js";

const app = express();

const PORT = 5000;

app.use(cors());

// app.use(
//   cors({
//     origin: "http://localhost:5000",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true,
//   })
// );
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});
