import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketsSlice';
import missionReducer from './missions/missionSlice';
import dragonsReducer from './dragons/dragons';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
    missions: missionReducer,
    dragonSlice: dragonsReducer,
  },
});

export default store;
