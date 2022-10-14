import axios from 'axios';
const API_KEY = '8cc3f51783b6f51ce15c512d80d9699c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchTrending = async (time = 'day') => {
  try {
    const response = await axios.get(
      `trending/movie/${time}?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchDetails = async (id) => {
    const response = await axios.get(`movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
};

export const fetchByQ = async value => {
  const response = axios.get(`search/movie?api_key=${API_KEY}&query=${value}`);
  return response.data.results;
};

export const fetchCast = async id => {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast
}

export const fetchReviews = async id => {
  const response = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`)
  return response.data.results
}

const api = { fetchTrending, fetchDetails, fetchByQ, fetchCast };

export default api;
