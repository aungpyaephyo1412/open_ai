import {configureStore} from "@reduxjs/toolkit";
import {serviceAPI} from "./serviceAPI.js";

 export const store = configureStore({
     reducer: {
         // Add the generated reducer as a specific top-level slice
         [serviceAPI.reducerPath]: serviceAPI.reducer,
     },
     // Adding the api middleware enables caching, invalidation, polling,
     // and other useful features of `rtk-query`.
     middleware: (getDefaultMiddleware) =>
         getDefaultMiddleware().concat(serviceAPI.middleware),
 });