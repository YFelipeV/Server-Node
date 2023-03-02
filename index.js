import express from "express";
import indexRoutes from "./routes/index.routes.js";
import morgan from "morgan";
import cors from "cors";

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(indexRoutes);

app.listen(4000);
console.log("servidor corriendo" + 4000);
