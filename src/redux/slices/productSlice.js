import { createSlice } from "@reduxjs/toolkit";
import { fetchProductDetails, fetchProducts } from "../../api/products";

const initialState = {
    count: 0,
    products: [],
    paginatedProducts: [],
    currentPage: 1,
    productsPerPage: 5,
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
            state.currentPage = 1
        },
        setPage: (state, action) => {
            state.currentPage = action.payload
            const start = (state.currentPage - 1) * state.productsPerPage // page =1 0, page=2 1
            const end = start + state.productsPerPage
            // console.log({ start, end });
            state.paginatedProducts = state.products.slice(start, end)
        },
        priceSort: (state) => {
            state.products = state.products.sort((a, b) => b.price - a.price)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.loading = false
            state.products = action.payload
            state.currentPage = 1
            state.paginatedProducts = state.products.slice(0, state.productsPerPage)
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

export const { increment, decrement, reset, setPage, priceSort } = productSlice.actions
export default productSlice.reducer