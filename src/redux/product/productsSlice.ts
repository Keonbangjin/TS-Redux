import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = "https://ecommerce-backend-fawn-eight.vercel.app/api/products";

export interface IProduct {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  rate: number;
  price: number;
  size: string;
  color: string;


}

interface IProductState {
  value: IProduct[];
  isLoading: boolean;

}

const initialState: IProductState = {
  value: [],
  isLoading: false,
};

export const fetchProducts = createAsyncThunk( "product/fetchProducts", async () => {
    const response = await axios.get<IProduct[]>( "https://ecommerce-backend-fawn-eight.vercel.app/api/products");
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.value = action.payload;
        state.isLoading = false;
      })
    ;
  },
});

export default productSlice.reducer;
