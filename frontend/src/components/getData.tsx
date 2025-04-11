import { getAllUnemploymentData } from '../services/unemploymentDataService';

const getUnemploymentData = () => {

    const fetchData = async () => {

        try {
            const fetchedData = await getAllUnemploymentData();
            console.log("Fetched results: ", fetchedData);

        } catch (err) {
            console.error('Error fetching data', err);
        } 
    };


    return fetchData;

};
     
        
export default getUnemploymentData;
