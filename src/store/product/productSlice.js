import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const rapidapiKey = import.meta.env.VITE_API_KEY;

const myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Key", rapidapiKey);
myHeaders.append("'X-RapidAPI-Host", "real-time-amazon-data.p.rapidapi.com");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const fetchProduct = createAsyncThunk('fetchProduct', async (payload) => {
  const response = await fetch(`https://real-time-amazon-data.p.rapidapi.com/search?query=${payload}`, requestOptions);
  return response.json();
})

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: null,
    isLoading: false,
    isError: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    })
    builder.addCase(fetchProduct.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      console.log('Error on loading data from fetch product');
    })
  },
  reducers: {}
})

export default productSlice.reducer