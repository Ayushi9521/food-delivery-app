import express from "express";
import authMiddleWare from "../middleware/auth.js";
import { listOrders, orderStatus, placeOrder, userOrders } from "../controllers/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/place",authMiddleWare,placeOrder);
orderRouter.post("/userorders",authMiddleWare,userOrders)
orderRouter.get("/list",listOrders)
orderRouter.post("/status",orderStatus)
export default orderRouter;