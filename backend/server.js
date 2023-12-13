import express from "express";
import orderRoute from "./routes/orderRoute.js";
import { connectionMongoose } from "./util/connectionMongoose.js";

const app = express();
app.use(express.json());
app.use("/", orderRoute);
const mongooseConnected = await connectionMongoose();
app.listen(3010, () => console.log("Server is on PORT:3010"));
