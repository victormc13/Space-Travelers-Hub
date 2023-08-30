import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/rockets');
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Failed to fetch rocket data');
  }
});

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

const rocketSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    reserve: (state, action) => {
      state.rockets = state.rockets.map((rocket) => (
        rocket.id !== action.payload
          ? rocket : { ...rocket, reserved: !rocket.reserved }
      ));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRockets.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRockets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.rockets = action.payload.map((rocket) => ({
          ...rocket,
          reserved: false,
        }));
      })
      .addCase(fetchRockets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
export const { reserve } = rocketSlice.actions;
export default rocketSlice.reducer;
