import { configureStore } from "@reduxjs/toolkit"
//store la irunthu part 2 start aahuthu.index .js la provider store import pannanum.react redux install(react redux la tutorial la npm copy)
//  useDispatch,cartActions  productcard la import pannanum

import cartSlice from "./slice/cartSlice";
const store = configureStore({
    reducer: {
        cart: cartSlice,

    },

});
export default store;

