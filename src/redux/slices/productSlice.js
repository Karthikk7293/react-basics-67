import { createSlice } from "@reduxjs/toolkit";


const productSlice = createSlice({
    name: "products",
    initialState: { count: 0 },
    reducers: {
        increment: (state, action) => {
            state.count = action.payload
        },
        decrement: (state, action) => {
            state.count = action.payload
        },
        reset: (state) => {
            state.count = 0
        }
    }

})

export const { increment, decrement, reset } = productSlice.actions
export default productSlice.reducer