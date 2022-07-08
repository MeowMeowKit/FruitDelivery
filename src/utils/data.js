import Strawberries from "../assets/images/f1.png";
import I1 from "../assets/images/Coconut.png";
import orange from "../assets/images/orange.png";
import smoothie from "../assets/images/smoothie3.png";

const heroData = [
   {
      id: 1,
      name: "Icecream",
      decp: "Coconut Icecream",
      price: "2.5",
      imageSrc: I1,
   },
   {
      id: 2,
      name: "Fruits",
      decp: "Fresh Strawberries",
      price: "3.0",
      imageSrc: Strawberries,
   },
   {
      id: 3,
      name: "Orange",
      decp: "Orange Juice",
      price: "2.5",
      imageSrc: orange,
   },
   {
      id: 4,
      name: "Smoothie",
      decp: "Smoothie Strawberries",
      price: "3.0",
      imageSrc: smoothie,
   },
];

const categories = [
   { id: 1, name: "Fruits", urlParamName: "fruits" },
   { id: 2, name: "Smoothie", urlParamName: "smoothie" },
   { id: 3, name: "Jam", urlParamName: "jam" },
   { id: 4, name: "Juice", urlParamName: "juice" },
   { id: 5, name: "Icecream", urlParamName: "icecream" },
];

export { heroData, categories };
