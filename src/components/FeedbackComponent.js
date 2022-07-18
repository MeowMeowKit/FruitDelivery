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
import { ImLocation2 } from "react-icons/im";
import { motion } from "framer-motion";

const FeedbackComponent = () => {
   return (
      <div className="flex w-full min-h-screen items-center justify-center md:-mt-11">
         <div className="flex flex-col md:flex-row md:gap-x-6 md:gap-y-0 w-full gap-y-4 max-w-5xl bg-gradient-to-r from-cyan-500 to-blue-500 p-8 sm:p-10 rounded-xl shadow-lg text-white overflow-hidden">
            <div className="flex flex-col gap-y-6 justify-between">
               <div>
                  <h1 className="font-bold text-4xl tracking-wide">Feedback</h1>
                  <p className="pt-2 tracking-wide text-cyan-100 text-sm">
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                     Excepturi praesentium suscipit dignissimos aut. Voluptatum
                     labore veniam ducimus quas, quos saepe odio, iure sit
                     ratione accusantium illo nemo et repudiandae maiores.
                  </p>
               </div>
               <div className="flex items-center gap-2 cursor-pointer tracking-wide text-sm md:text-base">
                  <ImLocation2 className="text-2xl md:text-base" />
                  Lot E2a-7, Road D1, Long Thanh My, Thu Duc City, HCMC
               </div>
               <div className="flex items-center gap-2 cursor-pointer">
                  <AiFillPhone /> (+84) 987 654 321
               </div>
               <div className="flex items-center gap-2 cursor-pointer">
                  <GiRotaryPhone />
                  (+84) 123 456 789
               </div>
               <motion.div
                  whileTap={{ scale: 0.9 }}
                  className="flex items-center gap-2 cursor-pointer"
               >
                  <AiFillMail />
                  cuonglcse151508@fpt.edu.vn
               </motion.div>
               <div className="flex gap-x-4 text-lg mt-6">
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
            <div className="relative">
               <div className="absolute z-0 h-40 w-40 rounded-full bg-teal-300 -right-24 -top-24"></div>
               <div className="absolute z-0 h-40 w-40 rounded-full bg-teal-300 -left-24 -bottom-16"></div>
               <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-headingColor md:w-96">
                  <form action="" className="flex flex-col gap-y-2">
                     <div>
                        <label className="text-sm font-semibold">
                           Your Name
                        </label>
                     </div>
                     <div>
                        <input
                           type="text"
                           name="name"
                           className="w-full p-2 border-2 border-gray-300 rounded-lg outline-none focus:border-gray-500 px-4 py-2 mt-2"
                           placeholder="Your name"
                        />
                     </div>
                     <div>
                        <label className="text-sm font-semibold">
                           Phone Number
                        </label>
                     </div>
                     <div>
                        <input
                           type="number"
                           name="phone"
                           className="w-full p-2 border-2 border-gray-300 rounded-lg outline-none focus:border-gray-500 px-4 py-2 mt-2"
                           placeholder="Your Phone"
                        />
                     </div>
                     <div>
                        <label className="text-sm font-semibold">
                           Email Address
                        </label>
                     </div>
                     <div>
                        <input
                           type="text"
                           name="email"
                           className="w-full p-2 border-2 border-gray-300 rounded-lg outline-none focus:border-gray-500 px-4 py-2 mt-2"
                           placeholder="Email"
                        />
                     </div>
                     <div>
                        <label className="text-sm font-semibold">
                           Feedback
                        </label>
                     </div>
                     <div>
                        <textarea
                           name="feedback"
                           rows="4"
                           className="w-full p-2 border-2 border-gray-300
                           rounded-md outline-none focus:border-gray-500 px-4 py-2 mt-2"
                           placeholder="Feedback"
                        ></textarea>
                     </div>
                     <button className="inline-block self-end bg-cyan-700 text-white rounded-lg font-semibold px-6 py-2 uppercase text-sm">
                        Send Feedback
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   );
};

export default FeedbackComponent;
