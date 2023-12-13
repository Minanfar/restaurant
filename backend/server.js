import express from "express";
import orderRoute from "./routes/orderRoute.js";
import { connectMongoose } from "./util/connectionMongoose.js";

const app = express();
app.use(express.json());

await connectMongoose();
app.use("/", orderRoute);
app.listen(3010, () => console.log("Server is on PORT:3010"));
