import React, { useState } from 'react';

function AddEmployee() {
    const [empName, setEmpName] = useState('');
    const [emailID, setEmailID] = useState('');
    const [empSalary, setEmpSalary] = useState('');
    const [departmentName, setDepartmentName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newEmployee = {
            empName,
            emailID,
            empSalary,
            departmentName  // Send department name instead of ID
        };

        try {
            const response = await fetch('http://localhost:27017/api/addEmployee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newEmployee)
            });

            const result = await response.json();
            if (response.ok) {
                console.log('Employee added successfully:', result);
            } else {
                console.error('Error:', result.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="mb-4">Add New Employee</h1>
            <form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
                <div className="form-group">
                    <label htmlFor="empName">Employee Name:</label>
                    <input 
                        type="text" 
                        id="empName" 
                        className="form-control" 
                        value={empName} 
                        onChange={(e) => setEmpName(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="emailID">Email ID:</label>
                    <input 
                        type="email" 
                        id="emailID" 
                        className="form-control" 
                        value={emailID} 
                        onChange={(e) => setEmailID(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="empSalary">Salary:</label>
                    <input 
                        type="number" 
                        id="empSalary" 
                        className="form-control" 
                        value={empSalary} 
                        onChange={(e) => setEmpSalary(e.target.value)} 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="departmentName">Department Name:</label>
                    <input 
                        type="text" 
                        id="departmentName" 
                        className="form-control" 
                        value={departmentName} 
                        onChange={(e) => setDepartmentName(e.target.value)} 
                        required 
                    />
                </div>

                <button type="submit" className="btn btn-primary btn-block mt-3">Add Employee</button>
            </form>
        </div>
    );
}

export default AddEmployee;
