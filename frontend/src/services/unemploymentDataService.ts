import { UnemploymentData } from '../types/UnemploymentData';

//const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:8080/api/data' : '/api/notes';
const API_URL = '/api/unemploymentData';
console.log('API_URL:', API_URL);  // Log the API URL

export const getAllUnemploymentData = async (): Promise<UnemploymentData []> => {
  console.log('Fetching all Data from:', `${API_URL}/all`);  // Log the full endpoint
  try {
    const response = await fetch(`/api/data/all`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    console.log('API response:', data); // Log the response data
    return data;
  } catch (error) {
    console.error('Error fetching Unemplyment Data:', error);
    return [];
  }
};

export const getUnemploymentData = async (cityID: number): Promise<UnemploymentData> => {
  console.log(`Fetching note with id ${cityID} from:`, `${API_URL}/get/${cityID}`);  // Log the full endpoint
  try {
    const response = await fetch(`${API_URL}/get/${cityID}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching note:', error);
    throw error;
  }
};
