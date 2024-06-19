// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <h1>Students Management</h1>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/add" element={<StudentForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
