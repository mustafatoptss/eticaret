import { createSlice } from '@reduxjs/toolkit';

const getBasketFromStorage = () => {
  if (localStorage.getItem("basket")) {
    return JSON.parse(localStorage.getItem("basket"));
  }
  return [];
};

const writeBasketToStorage = (basket) => {
  localStorage.setItem("basket", JSON.stringify(basket));
};

const initialState = {
  products: getBasketFromStorage(),
  drawer: false,
  totalAmount : 0
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const findProduct = state.products.find(product => product.id === action.payload.id);

     if(findProduct){
        const extractedProducts = state.products.filter((product)=> product.id !== action.payload.id);
        findProduct.count += action.payload.count;
        state.products= [...extractedProducts,findProduct];
        writeBasketToStorage(state.products);

     }else{
        state.products= [...state.products,action.payload];
        writeBasketToStorage(state.products);
     }
    },
  setDrawer : (state,action)=>{
    state.drawer = !state.drawer;
  },
 calculateAmount: (state) => {
  const total = state.products.reduce((acc, product) => {
    return acc + (product.price * (product.count || 1)); // count yoksa 1 varsay
  }, 0);
  state.totalAmount = total;
}
 

  },
  extraReducers: (builder) => {
    // Gerekirse ek reducers
  }
});

export const { addToBasket,setDrawer,calculateAmount } = basketSlice.actions;

export default basketSlice.reducer;
