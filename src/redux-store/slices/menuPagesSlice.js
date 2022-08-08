import { createSlice } from "@reduxjs/toolkit/";

const menuPagesSlice = createSlice({
    name: 'menuPages',
    initialState: {
        pages: {},
        routes: {},
    },
    reducers: {
        updatePages: (state, action) => {
            state.pages = action.payload;
        },
        updateRoutes: (state, action) => {
            state.routes = action.payload;
        }
    }
})

export const { updatePages, updateRoutes } = menuPagesSlice.actions;
export default menuPagesSlice.reducer;