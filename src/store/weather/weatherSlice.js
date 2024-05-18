import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const rapidapiKey = import.meta.env.VITE_API_KEY;

const myHeaders = new Headers();
myHeaders.append("X-RapidAPI-Key", rapidapiKey);
myHeaders.append("'X-RapidAPI-Host", "ai-weather-by-meteosource.p.rapidapi.com");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

export const fetchWeather = createAsyncThunk('fetchWeather', async (payload) => {
  const response = await fetch(`https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${payload}`, requestOptions);
  return response.json();
})

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    value: null,
    isLoading: false,
    isError: false
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.value = action.payload;
    })
    builder.addCase(fetchWeather.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
      console.log('Error on loading data from fetch weather');
    })
  },
  reducers: {}
})

export default weatherSlice.reducer