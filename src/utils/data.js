import Pomegranates from "../assets/images/f1.png";
import I1 from "../assets/images/i1.png";
import C3 from "../assets/images/c3.png";
import Fi1 from "../assets/images/fi1.png";

const heroData = [
   {
      id: 1,
      name: "Icecream",
      decp: "Chocolate & vanilla",
      price: "5.25",
      imageSrc: I1,
   },
   {
      id: 2,
      name: "Strawberries",
      decp: "Fresh Strawberries",
      price: "3.99",
      imageSrc: Pomegranates,
   },
   {
      id: 3,
      name: "Fruit Kebab",
      decp: "abc asd sadjsa dajs",
      price: "7.99",
      imageSrc: C3,
   },
   {
      id: 4,
      name: "Food Kebab",
      decp: "kim loan an cut heo",
      price: "4.99",
      imageSrc: Fi1,
   },
];

const categories = [
   { id: 1, name: "Chicken", urlParamName: "chicken" },
   { id: 2, name: "Curry", urlParamName: "curry" },
   { id: 3, name: "Rice", urlParamName: "rice" },
   { id: 4, name: "Fish", urlParamName: "fish" },
   { id: 5, name: "Fruits", urlParamName: "fruits" },
   { id: 6, name: "Icecream", urlParamName: "icecream" },
   { id: 7, name: "Soft Drinks", urlParamName: "drinks" },
];

export { heroData, categories };
