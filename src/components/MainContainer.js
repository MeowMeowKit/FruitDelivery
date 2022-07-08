import React, { useEffect, useRef, useState } from "react";
import HomeContainer from "./HomeContainer";
import { motion } from "framer-motion";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContent from "./RowContent";
import { useStateValue } from "../context/StateProvider";
import MenuContainer from "./MenuContainer";
import CartContainer from "./CartContainer";

const MainContainer = () => {
   const [{ foodItems, showCart }, dispatch] = useStateValue();
   const [scrollValue, setScrollValue] = useState(0);

   useEffect(() => {}, [scrollValue, showCart]);

   return (
      <div className="w-full h-auto flex flex-col items-center justify-center">
         <HomeContainer />

         {/* <section className="w-full my-4">
            <div className="w-full flex item-center justify-between">
               <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounfed-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-pink-400 to-pink-600 transition-all ease-in-out duration-100">
                  Our Fresh and Healthy fruits
               </p>
               <div className="hidden sm:flex gap-3 items-center">
                  <motion.div
                     whileTap={{ scale: 0.75 }}
                     className="w-8 h-8 rounded-lg bg-pink-300 hover:bg-pink-500 flex duration-100 cursor-pointer ease-in-out hover:shadow-lg items-center justify-center"
                     onClick={() => setScrollValue(-200)}
                  >
                     <MdChevronLeft className="text-lg text-white" />
                  </motion.div>
                  <motion.div
                     whileTap={{ scale: 0.75 }}
                     className="w-8 h-8 rounded-lg bg-pink-300 hover:bg-pink-500 flex transition-all duration-100 cursor-pointer ease-in-out hover:shadow-lg items-center justify-center"
                     onClick={() => setScrollValue(200)}
                  >
                     <MdChevronRight className="text-lg text-white" />
                  </motion.div>
               </div>
            </div>
            <RowContent
               scrollValue={scrollValue}
               flag={true}
               data={foodItems?.filter((items) => items.category === "fruits")}
            />
         </section> */}

         {/* <MenuContainer /> */}
         {showCart && <CartContainer />}
      </div>
   );
};

export default MainContainer;
