import React, { useState } from "react";
import { MdShoppingCart, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../assets/images/logo3.png";
import Avatar from "../assets/images/avatar.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
   const firebaseAuth = getAuth(app);
   const provider = new GoogleAuthProvider();

   const [{ user, showCart, cart }, dispatch] = useStateValue();

   const [isMenu, setIsMenu] = useState(false);

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

   const logout = () => {
      setIsMenu(false);
      localStorage.clear();
      dispatch({ type: actionType.SET_USER, user: null });
   };

   const toggleCart = () => {
      dispatch({ type: actionType.SET_CART_SHOW, showCart: !showCart });
   };

   return (
      <header className="fixed z-50 w-screen bg-teal-400 p-3 px-8 md:p-6 md:px-16">
         {/* laptop */}
         <div className="hidden md:flex w-full h-full items-center justify-between">
            <Link to={"/"} className="flex items-center gap-2">
               <img src={Logo} className="w-16 object-cover" alt="logo" />
               <p
                  className="text-headingColor text-xl font-bold"
                  onClick={() => setIsMenu(false)}
               >
                  CUONG's STORE
               </p>
            </Link>
            <div className="flex items-center justify-center gap-8 ">
               <motion.ul
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 200 }}
                  className="flex items-center gap-8 snip1217"
               >
                  <Link to={"/"}>
                     <li
                        className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer font-semibold current"
                        onClick={() => setIsMenu(false)}
                     >
                        Home
                     </li>
                  </Link>
                  <Link to={"/menuItems"}>
                     <li
                        className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer font-semibold"
                        onClick={() => setIsMenu(false)}
                     >
                        Menu
                     </li>
                  </Link>
                  <Link to={"/aboutus"}>
                     <li
                        className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer font-semibold"
                        onClick={() => setIsMenu(false)}
                     >
                        About Us
                     </li>
                  </Link>
                  <Link to={"/contact"}>
                     <li
                        className="text-base text-headingColor  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer font-semibold"
                        onClick={() => setIsMenu(false)}
                     >
                        Service
                     </li>
                  </Link>
               </motion.ul>
               <div
                  className="relative flex items-center justify-center"
                  onClick={toggleCart}
               >
                  <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
                  {cart && cart.length > 0 && (
                     <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                        <p className="text-xs text-white font-semibold">
                           {cart.length}
                        </p>
                     </div>
                  )}
               </div>
               <div className="relative">
                  <motion.img
                     whileTap={{ scale: 0.6 }}
                     src={user ? user.photoURL : Avatar}
                     className="w-10 min-w-[40px] h-10 min-h-[40px] rounded-full shadow-2xl cursor-pointer"
                     alt="userprofile"
                     onClick={login}
                  />
                  {isMenu && (
                     <motion.div
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                     >
                        {user && user.email === "cuonglcse151508@fpt.edu.vn" && (
                           <Link to={"/createItem"}>
                              <p
                                 className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                                 onClick={() => setIsMenu(false)}
                              >
                                 New Item <MdAdd />
                              </p>
                           </Link>
                        )}
                        <p
                           className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                           onClick={logout}
                        >
                           Logout <MdLogout />
                        </p>
                     </motion.div>
                  )}
               </div>
            </div>
         </div>
         {/* mobile */}
         <div className="flex items-center justify-between md:hidden w-full h-full">
            <div
               className="relative flex items-center justify-center"
               onClick={toggleCart}
            >
               <MdShoppingCart className="text-textColor text-2xl cursor-pointer" />
               {cart && cart.length > 0 && (
                  <div className="absolute -top-3 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                     <p className="text-xs text-white font-semibold">
                        {cart.length}
                     </p>
                  </div>
               )}
            </div>

            <Link to={"/"} className="flex items-center gap-2">
               <img src={Logo} className="w-11 object-cover" alt="logo" />
               <p className="text-headingColor text-xl font-bold">
                  CUONG's STORE
               </p>
            </Link>

            <div className="relative">
               <motion.img
                  whileTap={{ scale: 0.6 }}
                  src={user ? user.photoURL : Avatar}
                  className="w-10 min-w-[40px] h-10 min-h-[40px] rounded-full shadow-2xl cursor-pointer"
                  alt="userprofile"
                  onClick={login}
               />

               {isMenu && (
                  <motion.div
                     initial={{ opacity: 0, scale: 0.6 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.6 }}
                     className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 right-0"
                  >
                     {user && user.email === "cuonglcse151508@fpt.edu.vn" && (
                        <Link to={"/createItem"}>
                           <p
                              className="px-4 py-2 flex items-center cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"
                              onClick={() => setIsMenu(false)}
                           >
                              New Item <MdAdd />
                           </p>
                        </Link>
                     )}

                     <ul className="flex flex-col">
                        <Link to={"/home"}>
                           <li
                              className="text-base text-textColor  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                              onClick={() => setIsMenu(false)}
                           >
                              Home
                           </li>
                        </Link>
                        <Link
                           to={"/menuItems"}
                           className="text-base text-textColor
                           hover:text-headingColor duration-100 transition-all
                           ease-in-out cursor-pointer hover:bg-slate-100 px-4
                           py-2"
                           onClick={() => setIsMenu(false)}
                        >
                           {" "}
                           Menu
                        </Link>
                        <Link to={"/aboutus"}>
                           <li
                              className="text-base text-textColor  hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-100 px-4 py-2"
                              onClick={() => setIsMenu(false)}
                           >
                              About Us
                           </li>
                        </Link>
                        <Link
                           to={"/contact"}
                           className="text-base text-textColor
                           hover:text-headingColor duration-100 transition-all
                           ease-in-out cursor-pointer hover:bg-slate-100 px-4
                           py-2"
                           onClick={() => setIsMenu(false)}
                        >
                           {" "}
                           Service
                        </Link>
                     </ul>

                     <p
                        className="m-2 p-2 rounded-md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-textColor text-base"
                        onClick={logout}
                     >
                        Logout <MdLogout />
                     </p>
                  </motion.div>
               )}
            </div>
         </div>
      </header>
   );
};
export default Header;
