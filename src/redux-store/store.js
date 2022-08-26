import { configureStore } from "@reduxjs/toolkit";
import menuPagesSlice from "./slices/menuPagesSlice";
import mainPagesSlice from "./slices/mainPagesSlice";
import authenticationSlice from "./slices/authenticationSlice";
import homepageSlice from "./slices/homepageSlice";

export default configureStore({
    reducer: {
        menuPages: menuPagesSlice,
        mainPages: mainPagesSlice,
        authentication: authenticationSlice,
        homePages: homepageSlice,
    },
})