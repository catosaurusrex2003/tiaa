import { routes } from "./routes";
import express from "express";
import cors from "cors";
const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//Routes


routes(app);

//Listener
app.listen(1337, () => {
  console.log("Server is up on port 1337");
});
