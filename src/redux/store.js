import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsSlice';
import missionReducer from './missions/missionSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
  },
});

export default store;
