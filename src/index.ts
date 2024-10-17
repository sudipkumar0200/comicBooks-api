import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json())
import bookRouter from "./routers/bookRouter";
const PORT = process.env.PORT ||3001;

app.use("/api/v1/books", bookRouter);

app.listen(PORT, () => {
  console.log(`Server is listining on PORT ${PORT}`);
});
