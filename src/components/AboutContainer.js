import React, { useState } from "react";
import Logo from "../assets/images/logo3.png";
import Leader from "../assets/images/A1.jpg";
import {
   AiFillInstagram,
   AiFillFacebook,
   AiFillTwitterSquare,
   AiFillLinkedin,
   AiFillPhone,
   AiFillMail,
   AiFillIdcard,
} from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { ImLocation2 } from "react-icons/im";
import { motion } from "framer-motion";
const AboutContainer = () => {
   const [hidden, setHidden] = useState(true);
   const handleClick = () => {
      setHidden(!hidden);
   };
   return (
      <>
         <h1 className="flex flex-col items-center justify-center font-bold text-blue-600 text-3xl py-4">
            Meet Our LeaderShip
         </h1>
         {/* <h1 className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounfed-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-pink-400 to-pink-600 transition-all ease-in-out duration-100">
            Meet Our LeaderShip
         </h1> */}
         <div className="p-2 flex flex-col md:flex-row items-start justify-center gap-4 my-4 bg-fuchsia-100 pb-10">
            <div className="w-full md:w-1/2 relative flex flex-col md:mt-10 gap-y-4 justify-between">
               {/* <h1 className="uppercase semibold flex items-center justify-center font-bold text-3xl tracking-wide ">
                  About Leader
               </h1> */}
               <div>
                  <h1 className="text-2xl font-semibold tracking-wide">
                     Introduce
                  </h1>
                  <p className="pt-2 tracking-wide text-base">
                     Currently a 4th year student at FPT University, 23 years
                     old, 5th semester and preparing to do an internship. Create
                     a website for assignment purposes. The dream is to develop
                     a website to help the family business.
                  </p>
               </div>
               <div className="flex items-center gap-2 cursor-pointer tracking-wide text-sm md:text-base">
                  <AiFillIdcard className="text-2xl md:text-base" />
                  Le Chi Cuong
               </div>
               <div className="flex items-center gap-2 cursor-pointer tracking-wide text-sm md:text-base">
                  <AiFillMail className="text-2xl md:text-base" />
                  chicuongle9898@gmai.com.vn
               </div>
               <div className="flex items-center gap-2 cursor-pointer tracking-wide text-sm md:text-base">
                  <ImLocation2 className="text-2xl md:text-base" />
                  Lot E2a-7, Road D1, Long Thanh My, Thu Duc City, HCMC
               </div>
               <div className="flex items-center gap-2 cursor-pointer">
                  <AiFillPhone /> (+84) 325 101 166
               </div>
               <div className="flex items-center justify-center cursor-pointer ">
                  <motion.button
                     whileTap={{ scale: 0.9 }}
                     type="button"
                     className="bg-red-300 w-full md:w-auto px-4 py-2 rounded-sm hover:shadow-lg transition-all ease-in-out duration-100"
                     onClick={handleClick}
                  >
                     Read More
                  </motion.button>
               </div>
               <div
                  className={
                     hidden
                        ? "hidden"
                        : "flex gap-x-4 text-xl mt-6 items-center justify-center cursor-pointer"
                  }
               >
                  <motion.div
                     whileTap={{ scale: 0.9 }}
                     className="flex items-center gap-1 cursor-pointer"
                  >
                     <AiFillFacebook />
                  </motion.div>
                  <motion.div
                     whileTap={{ scale: 0.9 }}
                     className="flex items-center gap-1 cursor-pointer"
                  >
                     <AiFillInstagram />
                  </motion.div>
                  <motion.div
                     whileTap={{ scale: 0.9 }}
                     className="flex items-center gap-1 cursor-pointer"
                  >
                     <AiFillTwitterSquare />
                  </motion.div>
                  <motion.div
                     whileTap={{ scale: 0.9 }}
                     className="flex items-center gap-1 cursor-pointer"
                  >
                     <AiFillLinkedin />
                  </motion.div>
               </div>
            </div>
            <div className="py-2 flex items-center justify-center relative">
               <img
                  src={Leader}
                  alt="leader"
                  className="z-10 w-full md:w-300 ml-2"
               />
               <div className=" bg-red-200 h-full w-300 absolute top-4 -left-2"></div>
            </div>
         </div>
         <hr />
         <div className="p-2 flex flex-col items-center justify-center gap-4 my-4">
            <h1 className="flex items-center justify-center font-bold text-blue-600 text-3xl py-4">
               About Us
            </h1>
            <div className="flex flex-col md:flex-row md:gap-x-6 md:gap-y-0 w-full gap-y-4 max-w-5xl bg-gradient-to-r to-cyan-400 from-blue-400 p-8 sm:p-10 rounded-xl shadow-lg text-white">
               <div className="w-full md:w-1/2 tracking-wide">
                  <p>
                     The store offers a variety of fruit products such as
                     smoothies, ice cream, jams, etc.
                  </p>
                  <p>
                     All fruits are selected and processed, and are certified
                     with an internship safety certificate from the Ministry of
                     Health. All documents are transparent.
                  </p>
                  <p>
                     The store always prioritizes the health and experience of
                     users, you just need to stay at home and place an order, we
                     will contact and confirm the order, we will bring it to
                     your door.
                  </p>
                  <p>
                     Thanks for trusting us. Any comments on the quality and
                     service attitude will always be the motivation for us to
                     get better and better.
                  </p>
               </div>
               <img
                  src={Logo}
                  className="w-full md:w-1/2 h-full object-cover"
                  alt="logo"
               />
            </div>
         </div>
      </>
   );
};

export default AboutContainer;
