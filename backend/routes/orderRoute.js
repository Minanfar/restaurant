import { Router } from "express";
import {
  getOrderInfo,
  addOrder,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";

const orderRouter = Router();

orderRouter
  .get("/", getOrderInfo)
  .post("/", addOrder)
  .patch("/:id", updateOrder)
  .delete("/:id", deleteOrder);
  
export default orderRouter;
