import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ViewEmployee from './Components/ViewEmployee'; // Ensure the path is correct
import AddEmployee from './Components/AddEmployee';  // Ensure the path is correct

function App() {
  return (
    <Router>
      <div className="App">
        {/* Center the title */}
        <div className="text-center mt-5">
          <h1>Quality Software HRMS</h1>
        </div>

        {/* Navbar or Tab Buttons */}
        <div className="d-flex justify-content-center mb-4">
          <div className="btn-group">
            {/* Using Link for routing */}
            <Link to="/view-employees" className="btn btn-primary">
              View Employees
            </Link>
            <Link to="/add-employee" className="btn btn-primary">
              Add Employee
            </Link>
          </div>
        </div>

        {/* Routes - Update Switch to Routes */}
        <Routes>
          <Route path="/view-employees" element={<ViewEmployee />} />
          <Route path="/add-employee" element={<AddEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
