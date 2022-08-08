import { createSlice } from "@reduxjs/toolkit/";

const mainPagesSlice = createSlice({
    name: 'mainPages',
    initialState: {
        routes: {},
    },
    reducers: {
        updateMainRoutes: (state, action) => {
            state.routes = action.payload;
        }
    }
})

export const { updateMainRoutes } = mainPagesSlice.actions;
export default mainPagesSlice.reducer;