import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Key", "07774b95d4msh97cf2c9c4b660f1p174484jsn5fe1b4b3a884");
myHeaders.append("'X-RapidAPI-Host", "potify23.p.rapidapi.com");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const fetchMusic = createAsyncThunk('fetchMusic', async (payload) => {
  const response = await fetch(`https://spotify23.p.rapidapi.com/search/?q=${payload}`, requestOptions);
  return response.json();
})

export const musicSlice = createSlice({
  name: 'music',
  initialState: {
    value: null,
    isLoading: false,
    isError: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMusic.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(fetchMusic.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    })
    builder.addCase(fetchMusic.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      console.log('Error on loading data from fetch music');
    })
  },
  reducers: {}
})

export default musicSlice.reducer