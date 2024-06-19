const {
    getStudents,
    createStudent,
    updateStudent,
    deleteStudent,
  } = require('../services/student.service');
  
  async function getStudentsController(req, res) {
    const { q, page = 1, limit = 10 } = req.query;
    const query = q ? { $or: [{ firstname: { $regex: q, $options: 'i' } }, { lastname: { $regex: q, $options: 'i' } }] } : {};
    
    try {
      const { students, totalPages } = await getStudents(query, page, limit);
      res.json({ data: students, totalPages });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  
  async function createStudentController(req, res) {
    const studentData = req.body;
    try {
      const student = await createStudent(studentData);
      res.status(201).send(student);
    } catch (error) {
      res.status(400).send(error.message);
    }
  }
  
  async function updateStudentController(req, res) {
    const { id } = req.params;
    const updateData = req.body;
    try {
      const student = await updateStudent(id, updateData);
      if (!student) {
        return res.status(404).send({ message: 'Student not found' });
      }
      res.send(student);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  
  async function deleteStudentController(req, res) {
    const { id } = req.params;
    try {
      const student = await deleteStudent(id);
      if (!student) {
        return res.status(404).send({ message: 'Student not found' });
      }
      res.send({ message: 'Student deleted' });
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
  
  module.exports = {
    getStudentsController,
    createStudentController,
    updateStudentController,
    deleteStudentController,
  };
  