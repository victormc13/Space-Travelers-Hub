import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const url = 'https://api.spacexdata.com/v3/missions';

export const getMissions = createAsyncThunk('missions/getMission', async (thunkAPI) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue({ message: error.message });
  }
});

const initialState = {
  missions: [],
  isLoading: true,
  error: undefined,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    reserve: (state, action) => {
      state.missions = state.missions.map((mission) => (
        mission.mission_id !== action.payload
        ? mission : { ...mission, reserved: !mission.reserved }
      ))
    }
  },
});

export const { reserve } = missionSlice.actions;

export default missionSlice.reducer;
