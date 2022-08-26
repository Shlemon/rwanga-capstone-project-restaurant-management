import { createSlice } from "@reduxjs/toolkit/";

const homepageSlice = createSlice({
    name: 'homePages',
    initialState: {
        pages: {},
    },
    reducers: {
        updateHomepages: (state, action) => {
            state.pages = action.payload;
        }
    }
})

export const { updateHomepages } = homepageSlice.actions;
export default homepageSlice.reducer;