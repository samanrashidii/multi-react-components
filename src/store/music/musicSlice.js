import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const musicSlice = createSlice({
  name: 'music',
  initialState: {
    value: null,
    loading: 'idle'
  },
  reducers: {
    search: (state, action) => {
      const myHeaders = new Headers();
      myHeaders.append("X-RapidAPI-Key", "07774b95d4msh97cf2c9c4b660f1p174484jsn5fe1b4b3a884");
      myHeaders.append("'X-RapidAPI-Host", "potify23.p.rapidapi.com");

      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
      };

      async function searchMusic () {
        const response = await fetch(`https://spotify23.p.rapidapi.com/search/?q=${action.payload}`, requestOptions);
        state.value = response;
      }

      searchMusic();
    },
  },
})

// Action creators are generated for each case reducer function
export const { search } = musicSlice.actions

export default musicSlice.reducer