import React, { useState, useEffect } from 'react';

function ViewEmployee() {
    const [employeeData, setEmployeeData] = useState([]);

    useEffect(() => {
        fetchEmployeeData();
    }, []);

    async function fetchEmployeeData() {
        const response = await fetch('http://localhost:27017/api/employees');
        const data = await response.json();
        setEmployeeData(data.employeeData);  // Assuming your response contains employeeData
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Employee List</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.length > 0 ? (
                        employeeData.map((employee) => (
                            <tr key={employee._id}>
                                <td>{employee.empName}</td>
                                <td>{employee.emailID}</td>
                                <td>{employee.empSalary}</td>
                                <td>{employee.department.deptName}</td> {/* Displaying department name */}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="4">No employees found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default ViewEmployee;
