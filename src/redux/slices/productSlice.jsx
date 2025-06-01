import { createSlice ,createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosHeaders } from 'axios'
const initialState = {
    products : [],
    selectedProduct: {},
    loading: false
}
const BASE_URL = 'https://fakestoreapi.com'
 export const getAllProducts = createAsyncThunk("getAllProducts" ,async()=>{
  const response = await axios.get(`${BASE_URL}/products`);
  return response.data
 })

export const productSlice = createSlice(
    {
        name : "product",
        initialState,
        reducers:{
            setSelectProducts : (state,action)=>{
                state.selectedProduct = action.payload

            }

        },
        extraReducers: (builder) =>{

builder.addCase(getAllProducts.pending, (state)=>{
    state.loading=false
})

            builder.addCase(getAllProducts.fulfilled,(state,actions)=>{
                state.loading=false;
                state.products = actions.payload;

            })

        }
    }
)
export const { setSelectProducts } = productSlice.actions

export default productSlice.reducer