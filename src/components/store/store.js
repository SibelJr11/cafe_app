import { configureStore } from "@reduxjs/toolkit";
import coffeePriceSlice from "./slices/coffeePriceSlice";
import stateSlice from "./slices/stateSlice";

const store = configureStore({
      reducer: {
            precioArroba: coffeePriceSlice,
            estado: stateSlice,
      },
});

export default store;
