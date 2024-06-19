const Student = require('../models/student.model');

async function getStudents(query, page = 1, limit = 10) {
  try {
    const students = await Student.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Student.countDocuments(query);

    return { students, totalPages: Math.ceil(total / limit) };
  } catch (error) {
    throw new Error(error.message);
  }
}

async function createStudent(studentData) {
  try {
    const student = new Student(studentData);
    await student.save();
    return student;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updateStudent(id, updateData) {
  try {
    const student = await Student.findByIdAndUpdate(id, updateData, { new: true });
    return student;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteStudent(id) {
  try {
    const student = await Student.findByIdAndDelete(id);
    return student;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
