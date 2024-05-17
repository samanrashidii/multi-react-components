import { configureStore } from '@reduxjs/toolkit'
import music from './music/musicSlice.js';
import weather from './weather/weatherSlice.js';

export default configureStore({
  reducer: {
    music: music,
    weather: weather
  },
})