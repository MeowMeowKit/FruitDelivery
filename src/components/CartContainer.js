import React, { useEffect, useState } from "react";
import { BiRefresh, BiMinus, BiPlus } from "react-icons/bi";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import EmptyCart from "../assets/images/emptyCart.svg";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase.config";
import CartItems from "./CartItems";

const CartContainer = () => {
   const firebaseAuth = getAuth(app);
   const provider = new GoogleAuthProvider();
   const [{ showCart, cart, user }, dispatch] = useStateValue();
   const [isMenu, setIsMenu] = useState(false);
   const [flag, setFlag] = useState(1);
   const [total, setTotal] = useState(0);

   const toggleCart = () => {
      dispatch({ type: actionType.SET_CART_SHOW, showCart: !showCart });
   };

   useEffect(() => {
      let totalPrice = cart.reduce(function (accumulator, item) {
         return accumulator + item.quantity * item.price;
      }, 0);
      setTotal(totalPrice);
   }, [total, flag, cart]);

   const clearCart = () => {
      dispatch({
         type: actionType.SET_CART_ITEMS,
         cart: [],
      });

      localStorage.setItem("cart", JSON.stringify([]));
   };
   const login = async () => {
      if (!user) {
         const {
            user: { refreshToken, providerData },
         } = await signInWithPopup(firebaseAuth, provider);
         console.log(refreshToken);
         dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
         });
         localStorage.setItem("user", JSON.stringify(providerData[0]));
      } else {
         setIsMenu(!isMenu);
      }
   };
   return (
      <motion.div
         initial={{ opacity: 0, x: 200 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 200 }}
         className="fixed top-0 right-0 w-full md:w-375 h-[100vh] bg-white drop-shadow-md flex flex-col z-50"
      >
         <div className="w-full flex items-center justify-between p-4 cursor-pointer">
            <motion.p
               whileTap={{ scale: 0.75 }}
               className="flex items-center gap-2 p-1 px-2 my-2  rounded-md hover:shadow-md cursor-pointer text-white bg-cartNumBg text-base"
               onClick={clearCart}
            >
               Clear <BiRefresh />
            </motion.p>
            <p className="text-textColor text-lg font-semibold">Cart</p>
            <motion.div whileTap={{ scale: 0.75 }} onClick={toggleCart}>
               <HiArrowRight className="text-textColor text-3xl" />
            </motion.div>
         </div>
         {cart && cart.length > 0 ? (
            <div className="w-full h-full bg-cartBg rounded-3xl flex flex-col">
               <div className="w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
                  {/* cart item */}
                  {cart &&
                     cart.map((item) => (
                        <CartItems
                           key={item.id}
                           item={item}
                           setFlag={setFlag}
                           flag={flag}
                        />
                     ))}
               </div>

               {/* cart total */}
               <div className="w-full flex-1 bg-cartTotal rounded-3xl flex flex-col items-center justify-evenly px-8 py-2">
                  <div className="w-full flex items-center justify-between">
                     <p className="text-white text-lg"> Sub Total</p>
                     <p className="text-white text-lg"> $ {total}</p>
                  </div>
                  <div className="w-full flex items-center justify-between">
                     <p className="text-white text-lg"> Delivery</p>
                     <p className="text-white text-lg"> $ 1</p>
                  </div>
                  <div className="w-full border-b border-gray my-2"></div>
                  <div className="w-full flex items-center justify-between">
                     {" "}
                     <p className="text-sky-500 text-2xl font-semibold">
                        Total
                     </p>
                     <p className="text-sky-500 text-2xl font-semibold">
                        {" "}
                        $ {total + 1}
                     </p>
                  </div>
                  {user ? (
                     <motion.button
                        whileTap={{ scale: 0.8 }}
                        type="button"
                        className="w-full p-2 rounded-full bg-gradient-to-tr from-pink-400 to-pink-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                     >
                        Check Out
                     </motion.button>
                  ) : (
                     <motion.button
                        whileTap={{ scale: 0.8 }}
                        type="button"
                        className="w-full p-2 rounded-full bg-gradient-to-tr from-pink-400 to-pink-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                        onClick={login}
                     >
                        Login To Check Out
                     </motion.button>
                  )}
               </div>
            </div>
         ) : (
            <div className="w-full h-full flex flex-col items-center justify-center gap-6">
               <img src={EmptyCart} className="w-300" alt="" />
               <p className="text-xl text-textColor font-semibold">
                  Add some items to your cart
               </p>
            </div>
         )}
      </motion.div>
   );
};

export default CartContainer;
