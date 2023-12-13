import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  tableNumber: {
    type: Number,
    required: true,
  },
  foodItems: [
    {
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  orderTime: {
    type: Date,
    default: () => new Date().toLocaleString("de"),
  },
});

orderSchema.virtual("totalPrice").get(function () {
  return foodItems.reduce((totalPrice, foodItem) => {
    return totalPrice + foodItem.price;
  }, 0);
});

const orderModel = mongoose.model("ordersCollection", orderSchema);

const totalPriceSchema = new mongoose.Schema({
  totalPrice: {
    type: Number,
  },
});

const TotalPrice = mongoose.model("TotalPrice", totalPriceSchema);

console.log(orderModel);

export default orderModel;
