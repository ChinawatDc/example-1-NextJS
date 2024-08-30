// src/services/api/photos.api.mockup.ts
import axios from 'axios';

export const getPhotos = async () => {
  try {
    const response = await axios.get('/data/photos.mockup.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
export const getBarChart = async () => {
  try {
    const response = await axios.get('/data/chart/chart.mockup.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
export const getBarBasics = async () => {
  try {
    const response = await axios.get('/data/chart/basicBar.mockup.json');
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
export const getentity = async () => {
  try {
    const response = await axios.get('http://20.198.241.24:8081/api/entity');
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
