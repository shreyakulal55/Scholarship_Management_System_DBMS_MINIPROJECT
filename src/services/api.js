import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Replace with your server's base URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const loginUser = async (userData) => {
  try {
    const response = await api.post('/login', userData);

    if (!response.data) {
      throw new Error('Login failed');
    }

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default api;
