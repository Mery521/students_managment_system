import axios from 'axios';

const fetchCity = async (countryId) => {
    try {
        const city = await axios.get(`http://localhost:5000/cities/${countryId}`);
        return city.data;
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
};

export default fetchCity;
