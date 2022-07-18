// import React from "react";

// const FooterContainer = () => {
//    return (
//       <div className="bg-teal-400 py-8 flex items-center justify-center">
//          FooterContainer
//       </div>
//    );
// };

// export default FooterContainer;
import React from "react";
import {
   AiFillInstagram,
   AiFillFacebook,
   AiFillTwitterSquare,
   AiFillLinkedin,
   AiFillPhone,
   AiFillMail,
} from "react-icons/ai";
import { GiRotaryPhone } from "react-icons/gi";
import { motion } from "framer-motion";
import { BiDonateHeart } from "react-icons/bi";
import { Link } from "react-router-dom";
const FooterContainer = () => {
   return (
      <footer className="z-50 w-screen p-3 px-8 md:p-4 md:px-16 bg-teal-300 mt-4">
         <div className="hidden md:flex w-full h-full items-center justify-between">
            <div className="flex flex-row text-center md:text-left gap-4 md:gap-32">
               <div className="basis-1/3">
                  <div className="uppercase font-bold text-sm md:text-lg text-headingColor">
                     Delivery Fruits
                  </div>
                  <div className="mb-4">
                     <p className="capitalize py-1">
                        Bring the best fruit and good health for you.
                     </p>
                     <p className="capitalize py-1">
                        Put your trust in us, we will bring you the best.
                     </p>
                     <p className="capitalize py-1">
                        Your health is most important to us.
                     </p>
                     <BiDonateHeart className="text-3xl mt-2" />
                  </div>
               </div>
               <div className="basis-1/6">
                  <div className="uppercase font-bold text-lg text-headingColor">
                     Links
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="text-sm md:text-base">
                        <Link to="/">Home</Link>
                     </div>
                     <div className="text-sm md:text-base">
                        <Link to="/menuItems">Menu</Link>
                     </div>
                     <div className="text-sm md:text-base">
                        <Link to="/">About Us</Link>
                     </div>
                     <div className="text-sm md:text-base">
                        <Link to="/">Service</Link>
                     </div>
                  </div>
               </div>
               <div className="basis-1/6">
                  <div className="uppercase font-bold text-lg text-headingColor">
                     Follow Us
                  </div>
                  <div className="flex flex-col gap-3">
                     <motion.a
                        href="https://www.facebook.com/Lcc060798"
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1 cursor-pointer"
                     >
                        <AiFillFacebook />
                        Facebook
                     </motion.a>
                     <motion.a
                        href="https://www.instagram.com/lccg.cc/"
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1 cursor-pointer"
                     >
                        <AiFillInstagram />
                        Instagram
                     </motion.a>
                     <motion.a
                        href="https://www.twitter.com/"
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1 cursor-pointer"
                     >
                        <AiFillTwitterSquare />
                        Twitter
                     </motion.a>
                     <motion.a
                        href="https://www.linkedin.com/in/"
                        whileTap={{ scale: 0.9 }}
                        className="flex items-center gap-1 cursor-pointer"
                     >
                        <AiFillLinkedin />
                        Linkedin
                     </motion.a>
                  </div>
               </div>
               <div className="basis-1/3">
                  <div className="uppercase font-bold text-lg text-headingColor">
                     Our Address
                  </div>
                  <div className="mb-2 text-sm md:text-lg tracking-wide ">
                     Lot E2a-7, Road D1, D. D1, Long Thanh My, Thu Duc City, Ho
                     Chi Minh City
                  </div>
                  <motion.div
                     whileTap={{ scale: 0.9 }}
                     className="flex items-center gap-1 cursor-pointer"
                  >
                     <AiFillPhone /> (+84) 987 654 321
                  </motion.div>
                  <div className="flex items-center gap-2 cursor-pointer">
                     <GiRotaryPhone />
                     (+84) 123 456 789
                  </div>
                  <motion.div
                     whileTap={{ scale: 0.9 }}
                     className="flex items-center gap-1 cursor-pointer"
                  >
                     <AiFillMail />
                     cuonglcse151508@fpt.edu.vn
                  </motion.div>
               </div>
            </div>
         </div>
         <div className="md:hidden w-full h-full items-center justify-between">
            <div className="flex flex-row text-left gap-12 md:gap-32">
               <div className="basis-1/2">
                  <div className="uppercase font-bold text-lg text-headingColor">
                     Links
                  </div>
                  <div className="flex flex-col gap-3">
                     <div className="text-base">
                        <Link to="/">Home</Link>
                     </div>
                     <div className="text-base">
                        <Link to="/menuItems">Menu</Link>
                     </div>
                     <div className="text-base">
                        <Link to="/">About Us</Link>
                     </div>
                     <div className="text-base">
                        <Link to="/">Service</Link>
                     </div>
                  </div>
               </div>
               <div className="basis-1/2">
                  <div className="uppercase font-bold text-lg text-headingColor">
                     Our Address
                  </div>
                  <div className="mb-2 text-sm tracking-wide ">
                     Lot E2a-7, Road D1, D. D1, Long Thanh My, Thu Duc City, Ho
                     Chi Minh City
                  </div>
                  <motion.div
                     whileTap={{ scale: 0.9 }}
                     className="flex text-sm items-center gap-1 cursor-pointer"
                  >
                     <AiFillPhone /> +84 987 654 321
                  </motion.div>
                  <motion.div
                     whileTap={{ scale: 0.9 }}
                     className="flex text-sm items-center gap-1 cursor-pointer mt-1"
                  >
                     <GiRotaryPhone />
                     +84 123 456 789
                  </motion.div>
               </div>
            </div>
            <div className="flex items-center justify-center md:hidden gap-3 mt-2">
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
               <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-1 cursor-pointer"
               >
                  <AiFillMail />
               </motion.div>
            </div>
         </div>

         <div className="text-headingColor hover:text-coffee-400 flex items-center justify-center mt-2">
            © 2022 MeowMeowKit
         </div>
      </footer>
   );
};
export default FooterContainer;
