import axios from 'axios';

const createStudent = async (students) => {
    try {
        const student = await axios.post(`http://localhost:5000/students`, students);
        return student.data;
    } catch (error) {
        throw error.response.data; 
    }
};

export default createStudent;
