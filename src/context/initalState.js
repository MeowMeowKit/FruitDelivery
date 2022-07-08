import { fetchUser, fetchCart } from "../utils/fetchLocalStorageData";

const userInfor = fetchUser();
const cartInfor = fetchCart();

export const initialState = {
   user: userInfor,
   foodItems: null,
   showCart: false,
   cart: cartInfor,
};
