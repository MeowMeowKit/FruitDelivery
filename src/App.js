import React, { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import {
   CreateContainer,
   FooterContainer,
   Header,
   MainContainer,
   MenuContainer,
} from "./components";
import { useStateValue } from "./context/StateProvider";
import { getAllItemsFood } from "./utils/firebaseFunction";
import { actionType } from "./context/reducer";

function App() {
   const [{ foodItems }, dispatch] = useStateValue();

   const fetchData = async () => {
      await getAllItemsFood().then((data) => {
         dispatch({
            type: actionType.SET_FOOD_ITEMS,
            foodItems: data,
         });
      });
   };

   useEffect(() => {
      fetchData();
   }, []);
   return (
      <AnimatePresence exitBeforeEnter>
         <div className="w-screen h-auto flex flex-col bg-primary">
            <Header />
            <main className="mt-14 md:mt-20 px-4 md:px-16 py-4 w-full">
               <Routes>
                  <Route path="/*" element={<MainContainer />} />
                  <Route path="/createItem" element={<CreateContainer />} />
                  <Route path="/menuItems" element={<MenuContainer />} />
               </Routes>
            </main>
            {/* <FooterContainer /> */}
         </div>
      </AnimatePresence>
   );
}

export default App;
