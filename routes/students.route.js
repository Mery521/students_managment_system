const express = require('express');
const router = express.Router();
const {
  getStudentsController,
  createStudentController,
  updateStudentController,
  deleteStudentController,
} = require('../controllers/student.controller');

router.get('/', getStudentsController);
router.post('/', createStudentController);
router.put('/:id', updateStudentController);
router.delete('/:id', deleteStudentController);

module.exports = router;
