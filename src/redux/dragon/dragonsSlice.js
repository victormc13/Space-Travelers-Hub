import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDragons = createAsyncThunk('Dragons/fetchDragons', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/dragons');
    const data = await response.json();
    return data;
  } catch (error) {
    throw Error('Failed to fetch dragons data');
  }
});

const initialState = {
  dragons: [],
  status: 'idle',
  error: null,
};

const dragonSlice = createSlice({
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
export const { reserve } = dragonSlice.actions;
export default dragonSlice.reducer;
