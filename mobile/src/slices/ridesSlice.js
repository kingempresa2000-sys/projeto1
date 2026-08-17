import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rides: [],
  activeRide: null,
  loading: false,
  error: null,
};

const ridesSlice = createSlice({
  name: 'rides',
  initialState,
  reducers: {
    setRides: (state, action) => {
      state.rides = action.payload;
    },
    setActiveRide: (state, action) => {
      state.activeRide = action.payload;
    },
    addRide: (state, action) => {
      state.rides.push(action.payload);
    },
    updateRide: (state, action) => {
      const index = state.rides.findIndex(r => r.id === action.payload.id);
      if (index !== -1) {
        state.rides[index] = action.payload;
      }
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setRides, setActiveRide, addRide, updateRide, setLoading, setError } = ridesSlice.actions;
export default ridesSlice.reducer;
