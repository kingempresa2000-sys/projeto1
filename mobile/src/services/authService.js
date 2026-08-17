import api from './api';

export const authService = {
  register: (userData) => api.post('/auth/register', userData),
  login: (email, password) => api.post('/auth/login', { email, password }),
  logout: () => api.post('/auth/logout'),
};

export const userService = {
  getProfile: () => api.get('/users/profile'),
  updateProfile: (userData) => api.put('/users/profile', userData),
  getRatings: (userId) => api.get(`/users/${userId}/ratings`),
};

export const rideService = {
  requestRide: (rideData) => api.post('/rides/request', rideData),
  acceptRide: (rideId) => api.post(`/rides/${rideId}/accept`),
  getActiveRides: () => api.get('/rides/active'),
  getRideHistory: (params) => api.get('/rides/history', { params }),
  completeRide: (rideId, data) => api.post(`/rides/${rideId}/complete`, data),
};

export const paymentService = {
  processPayment: (paymentData) => api.post('/payments/process', paymentData),
  getPaymentHistory: (params) => api.get('/payments/history', { params }),
};

export const messageService = {
  getMessages: (rideId) => api.get(`/messages/${rideId}`),
};

export const ratingService = {
  createRating: (ratingData) => api.post('/ratings', ratingData),
  getUserRatings: (userId) => api.get(`/ratings/${userId}`),
};
