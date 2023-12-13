import orderModel from "../model/orderModel.js";

export const addOrder = async (req, res) => {
  console.log("addorder" , req.body)
  try {
    const newOrder = new orderModel(req.body);

    await newOrder.save();
    res.status(201).send("order added");
  } catch (error) {
    res.status(500).send("Server error"+ error);
  }
};
export const getOrderInfo = async (req, res) => {
  try {
    const orders = await orderModel.find();

    res.status(200).send(orders);
  } catch (error) {
    res.status(500).send("Server error"+ error);
  }
};
export const updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const newOrder = req.body;
  try {
    const updatedOrder = await orderModel.findByIdAndUpdate(orderId, newOrder, {
      new: true,
    });
    res.status(201).send("order was updated!"+ updatedOrder);
  } catch (err) {
    res.status(500).send("server not found");
  }
};
export const deleteOrder = async (req, res) => {
    const orderId = req.params.id;
    try {
        const deleteOrder=await orderModel.findByIdAndDelete(orderId)
        res.send("order was deleted"+ deleteOrder)
    } catch (error) {
       res.send("there is no Connection") 
    }
};

