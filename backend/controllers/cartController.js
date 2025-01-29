import userModel from "../models/userModel.js"

// add items to user cart
const addTocart = async(req,res) => {
    try{
        let userData = await userModel.findOne({_id:req.body.userId});
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId] = 1;            
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Added to cart"})
    }
    catch(err){
        console.log(err)
        res.json({success:false, message:"Error"})

    }

}

// remove item from user cart
const removeFromCart = async (req,res) =>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId] > 0){
            cartData[req.body.itemId] -= 1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Item Removed from cart"})
    }
    catch(err){
        console.log(err);
        res.json({success:false,message:"Error"})
    }

}

// fetch user cart data
const getCart = async (req, res) =>{
    try{
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
    }
    catch(err){
        console.log(err)
        res.json({success:false,message:"Error"})
    }

}

export {addTocart, removeFromCart, getCart}