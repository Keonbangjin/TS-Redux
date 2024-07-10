import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import categoryReducer from "./category/categorySlice";
import productReducer from "./product/productsSlice";
import todoReducer from "./todo/todoSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
    product: productReducer,
    todo: todoReducer,
  },
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
