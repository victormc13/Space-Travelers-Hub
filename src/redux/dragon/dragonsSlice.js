import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDragons = createAsyncThunk('dragons/fetchDragons', async () => {
  try {
    const response = await axios.get('https://api.spacexdata.com/v4/dragons');
    return response.data;
  } catch (error) {
    throw Error('Failed to fetch dragon data');
  }
});

const initialState = {
  dragons: [],
  status: 'idle',
  error: null,
};

const rocketSlice = createSlice({
  name: 'dragons',
  initialState,
  reducers: {
    reserve: (state, action) => {
      state.dragons = state.dragons.map((dragon) => (
        dragon.id !== action.payload
          ? dragon : { ...dragon, reserved: !dragon.reserved }
      ));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDragons.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchDragons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dragons = action.payload.map((dragon) => ({
          ...dragon,
          reserved: false,
        }));
      })
      .addCase(fetchDragons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { reserve } = rocketSlice.actions;
export default rocketSlice.reducer;
