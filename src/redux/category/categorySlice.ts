import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

const backendUrl = "https://ecommerce-backend-fawn-eight.vercel.app/api/categories";

export interface ICategory {
  id: string;
  name: string;
  image: string;
}

interface CategoryState {
  categories: ICategory[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CategoryState = {
  categories: [],
  status: 'idle',
  error: null,
};

export const fetchCategories = createAsyncThunk(
  "category/fetchCategories",
  async () => {
    const response = await axios.get<ICategory[]>(backendUrl);
    return response.data;
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCategories.fulfilled, (state, action: PayloadAction<ICategory[]>) => {
        state.status = 'succeeded';
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch categories';
      });
  },
});

export default categorySlice.reducer;