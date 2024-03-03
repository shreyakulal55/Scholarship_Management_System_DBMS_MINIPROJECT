import api from './api';

const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);

    if (!response.data || !response.data.role) {
      throw new Error('Invalid response from the server');
    }

    return response.data;
  } catch (error) {
    let errorMessage = 'An error occurred while logging in';

    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      errorMessage = error.response.data || errorMessage;
    } else if (error.request) {
      // The request was made but no response was received
      errorMessage = 'No response from the server';
    } else {
      // Something happened in setting up the request that triggered an Error
      errorMessage = error.message || errorMessage;
    }

    throw new Error(errorMessage);
  }
};

// Add more authentication-related functions as needed

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  // Add other functions here
};
