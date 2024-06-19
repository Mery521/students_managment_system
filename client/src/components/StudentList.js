import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import fetchStudents from '../api/StudentList';

const StudentList = ({ deleteStudent }) => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
  
      const params = new URLSearchParams(searchParams);
      const query = params.get('q') || '';
      const currentPage = Number(params.get('page')) || 1;
  
      try {
        const { data, totalPages } = await fetchStudents(query, currentPage);
        setStudents(data);
        setTotalPages(totalPages);
        setSearchQuery(query);
        setPage(currentPage);
      } catch (error) {
        console.error('Error fetching students:', error);
        // Handle error state or set default values
      }
    };
  
    fetchData();
  }, [searchParams]);
  

  const handleCreateClick = () => {
    navigate('/add');
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ q: searchQuery, page: newPage });
  };

  return (
    <div className="student-list-container">
      <h2>Student List</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      <button onClick={handleCreateClick}>Create</button>
        <table className="student-table">
            <thead>
              <tr>
                <th>Firstname</th>
                <th>Lastname</th>
                <th>Email</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
            {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.firstname}</td>
                    <td>{student.lastname}</td>
                    <td>{student.email}</td>
                    <td>{student.created_at}</td>
                    <td>
                      <button className="delete-btn" onClick={() => deleteStudent(student.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No students found.</td>
                </tr>
              )}
            </tbody>
          </table>
          <div className="pagination">
            {[...Array(totalPages).keys()].map((number) => (
              <button key={number} onClick={() => handlePageChange(number + 1)}>
                {number + 1}
              </button>
            ))}
          </div>
    </div>
  );
};

export default StudentList;
