import { configureStore } from '@reduxjs/toolkit'
import music from './music/musicSlice.js';

export default configureStore({
  reducer: {
    music: music
  },
})