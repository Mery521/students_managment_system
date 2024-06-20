import axios from 'axios';

const deleteStudent = async (id) => {
    try {
        const student = await axios.delete(`http://localhost:5000/students/${id}`); //TODO get url from .env as name API_URL
        return student.data;
    } catch (error) {
        throw error.response.data; 
    }
};

export default deleteStudent;
