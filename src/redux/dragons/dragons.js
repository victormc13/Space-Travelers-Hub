import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const DRAGONS = 'DRAGONS';

const url = 'https://api.spacexdata.com/v3/dragons';

export const loadDragons = createAsyncThunk(DRAGONS, async () => {
  const response = await axios.get(url);
  const res = response.data;
  const data = res.map((item) => ({
    id: item.id,
    name: item.name,
    type: item.type,
    img: item.flickr_images[0],
    value: false,
  }));
  return data;
});

export const dragonSlice = createSlice({
  name: 'Dragons',
  initialState: [],
  reducers: {
    dragonReserve(state, action) {
      const newState = state.map((dragon) => {
        if (dragon.id === action.payload.id) {
          return {
            ...dragon,
            value: !dragon.value,
          };
        }
        return {
          ...dragon,
        };
      });
      return newState;
    },
  },

  extraReducers: {
    [loadDragons.fulfilled]: (state, action) => action.payload,
  },
});
const dragonAction = dragonSlice.actions;
export { dragonAction };
export default dragonSlice.reducer;
