import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import ridesReducer from './slices/ridesSlice';
import userReducer from './slices/userSlice';
import locationReducer from './slices/locationSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    rides: ridesReducer,
    user: userReducer,
    location: locationReducer,
  },
});

export default store;
