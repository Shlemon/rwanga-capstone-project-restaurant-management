import { configureStore } from "@reduxjs/toolkit";
import menuPagesSlice from "./slices/menuPagesSlice";
import mainPagesSlice from "./slices/mainPagesSlice";

export default configureStore({
    reducer: {
        menuPages: menuPagesSlice,
        mainPages: mainPagesSlice,
    },
})