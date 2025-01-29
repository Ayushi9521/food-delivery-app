import express from "express";
import { addTocart, removeFromCart, getCart } from "../controllers/cartController.js";
import authMiddleWare from "../middleware/auth.js";
const cartRouter = express.Router();

cartRouter.post("/add",authMiddleWare,addTocart);
cartRouter.post("/remove",authMiddleWare,removeFromCart);
cartRouter.post("/get",authMiddleWare,getCart);

export default cartRouter;