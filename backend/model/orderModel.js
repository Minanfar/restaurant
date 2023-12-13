import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  }
},{timestamps:true});



const orderModel = mongoose.model("ordersCollection", orderSchema);


export default orderModel;
