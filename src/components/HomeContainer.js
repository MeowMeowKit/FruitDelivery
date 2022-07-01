import React from "react";

import Delivery from "../assets/images/delivery2.png";
import HeroBg from "../assets/images/bg6.jpg";
import { heroData } from "../utils/data";

const HomeContainer = () => {
   return (
      <section
         className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full"
         id="home"
      >
         <div className="py-2 flex-1 flex flex-col items-start justify-center gap-4">
            <div className="flex items-center gap-2 justify-center bg-pink-200 px-2 py-1 rounded-full">
               <p className="text-base text-pink-500 font-semibold">
                  Bike Delivery
               </p>
               <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
                  <img
                     src={Delivery}
                     className="w-full h-full object-contain"
                     alt="delivery"
                  />
               </div>
            </div>

            <p className="text-[2.5rem] md:text-[3rem] lg:text-[4rem] font-bold tracking-wide text-headingColor transition-all">
               The Fastest Delivery Fruit in{" "}
               <span className="text-pink-600 text-[3rem] md:text-[3.5rem] lg:text-[4.5rem] transition-all">
                  HoChiMinh City
               </span>
            </p>

            <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
               doloremque dolores ad. Laboriosam enim sed perspiciatis? Alias at
               quibusdam aliquam nulla numquam, earum rerum. Ipsa beatae
               reprehenderit totam fugit facilis.
            </p>

            <button
               type="button"
               className="bg-gradient-to-br from-pink-400 to-pink-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100"
            >
               {" "}
               Order Now{" "}
            </button>
         </div>
         <div className="py-2 flex-1 flex items-center relative">
            <img
               src={HeroBg}
               alt="hero-bg"
               className="ml-auto h-400 w-full lg:w-[95%] lg:h-640 rounded-xl"
            />
            <div className="w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-32 py-4 gap-2 flex-wrap">
               {heroData &&
                  heroData.map((item) => (
                     <div
                        className="lg:w-190 p-4 bg-cartOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                        key={item.id}
                     >
                        <img
                           src={item.imageSrc}
                           className="w-26 lg:w-40 -mt-10 lg:-mt-20"
                           alt={item.name}
                        />
                        <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                           {item.name}
                        </p>

                        <p className="text-[12px] lg:text-sm text-pink-500 font-semibold my-1 lg:my-3">
                           {item.decp}
                        </p>

                        <p className="text-sm text-red-600 font-semibold">
                           <span className="text-xs text-red-600">$ </span>
                           {item.price}
                        </p>
                     </div>
                  ))}
            </div>
         </div>
      </section>
   );
};

export default HomeContainer;
