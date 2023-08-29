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
    reserve: (state, action) => {
      state.missions = state.missions.map((mission) => (
        mission.mission_id !== action.payload
        ? mission : { ...mission, reserved: !mission.reserved }
      ))
    }
  },
});

export default missionSlice.reducer;
