import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice.js"; 
import productReducer from "./slices/productsSlice.js";
import cartReducer from "./slices/cartSlice.js";
import checkoutReducer from "./slices/checkoutSlice.js";
import orderReducer from "./slices/orderSlice.js";
import adminReducer from "./slices/adminSlice.js";
import adminProductReducer from "./slices/adminProductSlice.js";
import adminOrdersReducer from "./slices/adminOrderSlice.js";



const store = configureStore({
    reducer: { 
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
        checkout: checkoutReducer,
        orders: orderReducer,
        admin: adminReducer,
        adminProducts: adminProductReducer,
        adminOrders: adminOrdersReducer,

     },
});

export default store;
