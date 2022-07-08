import React, { useEffect, useState } from "react";
import { GiFruitBowl } from "react-icons/gi";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContent from "./RowContent";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import CartContainer from "./CartContainer";

const MenuContainer = () => {
   const [filter, setFilter] = useState("fruits");

   const [{ foodItems, showCart }, dispatch] = useStateValue();
   const [scrollValue, setScrollValue] = useState(0);
   useEffect(() => {}, [scrollValue, showCart]);

   useEffect(() => {}, [filter]);

   return (
      <section className="w-full my-4" id="menu">
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
                  onClick={() => setScrollValue(scrollValue + 200)}
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
         <div className="w-full flex flex-col items-center justify-content">
            <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounfed-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-pink-400 to-pink-600 transition-all ease-in-out duration-100 mr-auto">
               Our Hot Dishes
            </p>
            <div className="w-full flex items-center justify-start lg:justify-center gap-8 mt-6 overflow-x-scroll scrollbar-none">
               {categories &&
                  categories.map((category) => (
                     <motion.div
                        whileTap={{ scale: 0.75 }}
                        key={category.id}
                        className={`group ${
                           filter === category.urlParamName
                              ? "bg-cartNumBg"
                              : "bg-white"
                        } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-lg flex flex-col gap-3 items-center justify-center duration-150 transition-all ease-in-out hover:bg-cartNumBg`}
                        onClick={() => setFilter(category.urlParamName)}
                     >
                        <div
                           className={`w-10 h-10 rounded-full shadow-lg ${
                              filter === category.urlParamName
                                 ? "bg-card"
                                 : "bg-cartNumBg"
                           } group-hover:bg-card flex items-center justify-center`}
                        >
                           <GiFruitBowl
                              className={`${
                                 filter === category.urlParamName
                                    ? "text-textColor"
                                    : "text-white"
                              }group-hover:text-textColor text-lg`}
                           />
                        </div>
                        <p
                           className={`text-sm ${
                              filter === category.urlParamName
                                 ? "text-white"
                                 : "text-textColor"
                           } group-hover:text-card`}
                        >
                           {category.name}
                        </p>
                     </motion.div>
                  ))}
            </div>
            <div className="w-full ">
               <RowContent
                  flag={false}
                  data={foodItems?.filter(
                     (foodItem) => foodItem.category === filter
                  )}
               />
            </div>
         </div>
         {showCart && <CartContainer />}
      </section>
   );
};

export default MenuContainer;
