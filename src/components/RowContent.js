import React, { useEffect, useRef, useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { motion } from "framer-motion";
import NotFound from "../assets/images/NotFound.svg";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import MenuContainer from "./MenuContainer";

const RowContent = ({ scrollValue, flag, data }) => {
   // console.log(data);

   const RowContent = useRef();

   const [items, setItems] = useState([]);
   const [{ cart }, dispatch] = useStateValue();

   useEffect(() => {
      RowContent.current.scrollLeft += scrollValue;
   }, [scrollValue]);

   const addToCart = () => {
      dispatch({
         type: actionType.SET_CART_ITEMS,
         cart: items,
      });
      localStorage.setItem("cart", JSON.stringify(items));
   };

   useEffect(() => {
      addToCart();
   }, [items]);

   return (
      <div
         ref={RowContent}
         className={`w-full my-14 flex items-center gap-3 scroll-smooth ${
            flag
               ? "overflow-x-scroll scrollbar-none"
               : "overflow-x-hidden flex-wrap justify-center"
         }`}
      >
         {data && data.length > 0 ? (
            data.map((item) => (
               <div
                  key={item.id}
                  className="w-300 min-w-[300px] md:w-340 md:min-w-[340px] h-185 my-12 bg-cartOverlay rounded-lg p-2 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative"
               >
                  <div className="w-full h-10 flex items-center justify-between">
                     <motion.div
                        whileHover={{ scale: 1.2 }}
                        className="w-40 h-40 -mt-2 drop-shadow-2xl"
                     >
                        <img
                           src={item.imageUrl}
                           alt=""
                           className="w-full h-full object-contain"
                        />
                     </motion.div>
                     <motion.div
                        whileTap={{ scale: 0.75 }}
                        className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                        onClick={() => setItems([...cart, item])}
                     >
                        <MdShoppingCart className="text-white" />
                     </motion.div>
                  </div>
                  <div className="w-full flex flex-col gap-4 items-end justify-end">
                     <p className="text-textColor font-semibold text-base md:text-lg">
                        {item.title}
                     </p>
                     <p className="mt-1 text-md text-gray-500 capitalize">
                        {item.category}
                     </p>
                     <div className="flex items-center gap-8">
                        <p className="text-red-500 font-semibold text-lg">
                           <span className="text-sm text-red-500">$ </span>
                           {item.price}
                        </p>
                     </div>
                  </div>
               </div>
            ))
         ) : (
            <div className="w-full flex flex-col items-center justify-center">
               <img src={NotFound} className="h-340" alt="" />
               <p className="text-xl text-headingColor font-semibold my-2">
                  Items Not Available
               </p>
            </div>
         )}
         {/* <MenuContainer/> */}
      </div>
   );
};

export default RowContent;
