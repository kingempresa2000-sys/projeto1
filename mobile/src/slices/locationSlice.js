import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latitude: null,
  longitude: null,
  accuracy: null,
  loading: false,
  error: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.accuracy = action.payload.accuracy;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLocation, setLoading, setError } = locationSlice.actions;
export default locationSlice.reducer;
