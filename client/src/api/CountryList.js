import axios from 'axios';

const fetchCountries = async () => {
    try {
        const countries = await axios.get('http://localhost:5000/countries');
        return countries.data;
    } catch (error) {
        console.error('Error fetching countries:', error);
    }
};

export default fetchCountries;
