import React, { useEffect, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
let items = [];
const CartItems = ({ item, setFlag, flag }) => {
   const [quantity, setQuantity] = useState(1);
   const [{ cart }, dispatch] = useStateValue();
   // const [items, setItems] = useState([]);

   const cartDispatch = () => {
      localStorage.setItem("cart", JSON.stringify(items));
      dispatch({
         type: actionType.SET_CART_ITEMS,
         cart: items,
      });
   };

   useEffect(() => {
      items = cart;
   }, [quantity, cart]);

   const updateQuatity = (action, id) => {
      if (action === "plus") {
         setQuantity(quantity + 1);
         cart.map((item) => {
            if (item.id === id) {
               item.quantity += 1;
               setFlag(flag + 1);
            }
         });
         cartDispatch();
      } else {
         if (quantity === 1) {
            items = cart.filter((item) => item.id !== id);
            setFlag(flag + 1);
            cartDispatch();
         } else {
            setQuantity(quantity - 1);
            cart.map((item) => {
               if (item.id === id) {
                  item.quantity -= 1;
                  setFlag(flag + 1);
               }
            });
            cartDispatch();
         }
      }
   };
   return (
      <div className="w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
         <img
            src={item.imageUrl}
            alt=""
            className="w-20 h-20 max-w-[60px] rounded-full object-contain"
         />
         <div className="flex flex-col gap-2">
            <p className="text-base text-gray-50">{item.title}</p>
            <p className="text-sm block text-gray-300 font-semibold">
               $ {parseFloat(item.price) * quantity}
            </p>
         </div>
         <div className="group flex items-center gap-2 ml-auto text-xl cursor-pointer">
            <motion.div
               whileTap={{ scale: 0.75 }}
               onClick={() => updateQuatity("minus", item.id)}
            >
               <BiMinus className="text-gray-50" />
            </motion.div>

            <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
               {quantity}
            </p>

            <motion.div
               whileTap={{ scale: 0.75 }}
               onClick={() => updateQuatity("plus", item.id)}
            >
               <BiPlus className="text-gray-50" />
            </motion.div>
         </div>
      </div>
   );
};

export default CartItems;
