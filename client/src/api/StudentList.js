import axios from 'axios';

const fetchStudents = async (searchQuery = '', page = 1) => {
  try {
    const response = await axios.get(`http://localhost:5000/students`, {
      params: {
        q: searchQuery,
        page,
      },
    });
    
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default fetchStudents;
