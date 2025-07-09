import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetails, fetchProducts } from "../../api/products";

const initialState = {
    count: 0,
    products: [],
    productDetails: {},
    loading: false,
    productDetailsLoading: false,
    error: null
}


const productSlice = createSlice({
    name: "products",
    initialState,
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.loading = false
            state.products = []
            state.error = action.error
        })
        builder.addCase(fetchProductDetails.pending, (state) => {
            state.productDetailsLoading = true
        })
        builder.addCase(fetchProductDetails.fulfilled, (state, action) => {
            state.productDetailsLoading = false
            state.productDetails = action.payload
        })
        builder.addCase(fetchProductDetails.rejected, (state, action) => {
            state.productDetailsLoading = false
            state.productDetails = {}
            state.error = action.error
        })
    }

})

export const { increment, decrement, reset } = productSlice.actions
export default productSlice.reducer