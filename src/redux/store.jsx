import { configureStore } from '@reduxjs/toolkit'
import appReducer from '../redux/slices/appSlice'
import productReducer from '../redux/slices/productSlice'
import basketReducer from '../redux/slices/basketSlice'

export default configureStore({
  reducer: {
    app : appReducer,
    product : productReducer,
    basket : basketReducer,
  }
})