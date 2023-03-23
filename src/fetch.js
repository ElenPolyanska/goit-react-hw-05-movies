import axios from 'axios';

const API_KEY = 'a9337963322cf40511fb0f6e59c68670';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getMedia = async () => {
  const URL = `${BASE_URL}trending/all/day?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    return await response.data.results;
  } catch (error) {
    alert(error.message);
  }
};

export const getMediaById = async id => {
  const URL = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    return await response.data;
  } catch (error) {
    alert(error.message);
  }
};

export const getMovie = async () => {
  const URL = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    return await response.data.results;
  } catch (error) {
    alert(error.message);
  }
};

export const getTVshows = async () => {
  const URL = `${BASE_URL}trending/tv/day?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    return await response.data.results;
  } catch (error) {
    alert(error.message);
  }
};

export const getMovieById = async id => {
  const URL = `${BASE_URL}movie/${id}?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    return await response.data;
  } catch (error) {
    alert(error.message);
  }
};

export const castById = async (id) => { 
  const URL = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    return await response.data.cast;
  } catch (error) {
    console.log(error.message);
  }
}
export const reviewsById = async (id) => {
  const URL = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    return await response.data.results
  } catch (error) { 
    console.log(error.message);
  }
 }


export const getTVbyId = async id => {
  const URL = `${BASE_URL}tv/${id}?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    return await response.data;
  } catch (error) {
    alert(error.message);
  }
};

export const castTVById = async (id) => { 
  const URL = `${BASE_URL}tv/${id}/credits?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    return await response.data.cast;
  } catch (error) {
    console.log(error.message);
  }
}
export const reviewsTVById = async (id) => {
  const URL = `${BASE_URL}tv/${id}/reviews?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    return await response.data.results
  } catch (error) { 
    console.log(error.message);
  }
 }

export const getMovieByName = async (query) => {
  const URL = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  try {
    const response = await axios.get(URL);
    return await response.data
  } catch (error) { 
    console.log(error.message);
  }
 }




