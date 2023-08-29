import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  isLoading: true,
  error: undefined,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {

  },
});

export default missionSlice.reducer;
