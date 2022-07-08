import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiFruitBowl } from "react-icons/gi";
import {
   MdCloudUpload,
   MdDelete,
   MdFoodBank,
   MdAttachMoney,
} from "react-icons/md";

import { categories } from "../utils/data";
import Loader from "./Loader";
import {
   deleteObject,
   getDownloadURL,
   ref,
   uploadBytesResumable,
} from "firebase/storage";
import { createItem, getAllItemsFood } from "../utils/firebaseFunction";
import { storage } from "../firebase.config";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

const CreateContainer = () => {
   const [title, setTitle] = useState("");
   const [calories, setCalories] = useState("");
   const [price, setPrice] = useState("");
   const [imageAsset, setImageAsset] = useState(null);
   const [category, setCategory] = useState(null);
   const [fields, setFields] = useState(false);
   const [alertStatus, setAlertStatus] = useState("danger");
   const [msg, setMsg] = useState(null);
   const [isLoading, setIsLoading] = useState(false);

   const [{ foodItems }, dispatch] = useStateValue();

   const uploadImage = (e) => {
      setIsLoading(true);
      const imageFile = e.target.files[0];

      const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
         "state_changed",
         (snapshot) => {
            const uploadProgress =
               (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
         },
         (error) => {
            setFields(true);
            setMsg("Error uploading image");
            setAlertStatus("danger");
            setTimeout(() => {
               setFields(false);
               setIsLoading(false);
            }, 4000);
         },
         () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
               setImageAsset(downloadURL);
               setIsLoading(false);
               setFields(true);
               setMsg("Image uploaded successfully");
               setAlertStatus("success");
               setTimeout(() => {
                  setFields(false);
                  setIsLoading(false);
               }, 4000);
            });
         }
      );
   };
   const deleteImage = () => {
      setIsLoading(true);
      const deleteRef = ref(storage, imageAsset);
      deleteObject(deleteRef).then(() => {
         setImageAsset(null);
         setIsLoading(false);
         setFields(true);
         setMsg("Image deleted successfully");
         setAlertStatus("success");
         setTimeout(() => {
            setFields(false);
            setIsLoading(false);
         }, 4000);
      });
   };
   const saveDatas = () => {
      setIsLoading(true);
      try {
         if (!title || !calories || !imageAsset || !price || !category) {
            setFields(true);
            setMsg("Please fill all fields!!!");
            setAlertStatus("danger");
            setTimeout(() => {
               setFields(false);
               setIsLoading(false);
            }, 4000);
         } else {
            const item = {
               id: `${Date.now()}`,
               title: title,
               imageUrl: imageAsset,
               category: category,
               calories: calories,
               quantity: 1,
               price: price,
            };
            createItem(item);
            setIsLoading(false);
            setFields(true);
            setMsg("Data created successfully");
            clearData();
            setAlertStatus("success");
            setTimeout(() => {
               setFields(false);
               // setIsLoading(false);
            }, 4000);
         }
      } catch (error) {
         setFields(true);
         setMsg("ERROR!!! TRY AGAIN!");
         setAlertStatus("danger");
         setTimeout(() => {
            setFields(false);
            setIsLoading(false);
         }, 4000);
      }
      fetchData();
   };

   const clearData = () => {
      setTitle("");
      setImageAsset(null);
      setCalories("");
      setPrice("");
      setCategory("Select Category");
   };

   const fetchData = async () => {
      await getAllItemsFood().then((data) => {
         dispatch({
            type: actionType.SET_FOOD_ITEMS,
            foodItems: data,
         });
      });
   };

   return (
      <div className="w-full min-h-screen flex items-center justify-center -mt-10">
         <div className="w-[90%] md:w-[75%] border border-pink-300 rounded-lg p-4 flex flex-col items-center justify-center gap-2">
            <h1 className="flex items-center justify-center font-semibold text-pink-600 text-3xl">
               CREATE NEW ITEM
            </h1>
            {fields && (
               <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${
                     alertStatus === "danger"
                        ? "bg-red-400 text-red-800"
                        : "bg-green-400 text-green-800"
                  }`}
               >
                  {msg}
               </motion.p>
            )}

            <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
               <GiFruitBowl className="text-xl text-gray-700" />
               <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give me a title..."
                  className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-300 text-textColor"
               />
            </div>
            <div className="w-full">
               <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="outline-none w-full text-base border-b-2 border-gray-200 p-2 round-md cursor-pointer rounded-md"
               >
                  <option value="other" className="bg-white">
                     Select Category
                  </option>
                  {categories &&
                     categories.map((category) => (
                        <option
                           key={category.id}
                           className="text-base border-0 outline-none capitalize bg-white text-headingColor"
                           value={category.urlParamName}
                        >
                           {category.name}
                        </option>
                     ))}
               </select>
            </div>
            <div className="group flex flex-col items-center justify-center border-2 border-dotted border-gray-300 w-full h-225 md:h-300 cursor-pointer rounded-lg">
               {isLoading ? (
                  <Loader />
               ) : (
                  <>
                     {!imageAsset ? (
                        <>
                           <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer">
                              <div className="w-full h-full flex flex-col items-center justify-center gap-2 ">
                                 <MdCloudUpload className="text-gray-500 text-3xl hover:text-gray-700" />
                                 <p>Click here to upload new image item</p>
                                 <input
                                    type="file"
                                    name="uploadimage"
                                    accept="image/*"
                                    onChange={uploadImage}
                                    className="w-0 h-0"
                                 />
                              </div>
                           </label>
                        </>
                     ) : (
                        <>
                           <div className="relative h-full">
                              <img
                                 className="w-full h-full object-cover"
                                 src={imageAsset}
                                 alt="upload images"
                              />
                              <button
                                 type="button"
                                 className="absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
                                 onClick={deleteImage}
                              >
                                 <MdDelete className="text-white" />
                              </button>
                           </div>
                        </>
                     )}
                  </>
               )}
            </div>
            <div className="w-full flex flex-col md:flex-row items-center gap-3">
               <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                  <MdFoodBank className="text-gray-700 text-2xl" />
                  <input
                     className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-300 text-textColor"
                     type="text"
                     required
                     value={calories}
                     onChange={(e) => setCalories(e.target.value)}
                     placeholder="Calories"
                  />
               </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-center gap-3">
               <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                  <MdAttachMoney className="text-gray-700 text-2xl" />
                  <input
                     className="w-full h-full text-lg bg-transparent outline-none border-none placeholder:text-gray-300 text-textColor"
                     type="text"
                     required
                     value={price}
                     onChange={(e) => setPrice(e.target.value)}
                     placeholder="Price"
                  />
               </div>
            </div>
            <div className="flex items-center justify-center w-full">
               <button
                  className="w-[20%] md:auto border-none outline-none bg-emerald-500 px-12 py-2 rouned-lg text-lg text-white font-semibold flex items-center justify-center"
                  onClick={saveDatas}
               >
                  Save
               </button>
            </div>
         </div>
      </div>
   );
};

export default CreateContainer;
