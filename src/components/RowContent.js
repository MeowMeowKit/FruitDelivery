import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";

const RowContent = ({ flag }) => {
   return (
      <div
         className={`w-full ${
            flag ? "overflow-x-scroll" : "overflow-x-hidden"
         }`}
      >
         <div className="w-300 md:w-225 h-auto my-16 backdrop-blur-lg">
            <div className="w-full flex items-center justify-between">
               <motion.img
                  whileHover={{ scale: 1.25 }}
                  src="https://firebasestorage.googleapis.com/v0/b/fruitdelivery-441a7.appspot.com/o/Images%2F1656589081705-f10.png?alt=media&token=e42e275c-d648-436b-abcd-0e76402404ed"
                  alt=""
                  className="w-40 -mt-8"
               />
               <motion.div
                  whileTap={{ scale: 0.75 }}
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
               >
                  <MdShoppingBasket className="text-white" />
               </motion.div>
            </div>
         </div>
      </div>
   );
};

export default RowContent;
