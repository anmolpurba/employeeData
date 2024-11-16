import { Router } from "express";
import Employee from "../models/employeeModel.js"; 
import Department from "../models/departmentModel.js";

const router = Router();

// Route to get all employees with department name
router.get('/employees', async (req, res) => {
    try {
        const employeeData = await Employee.find().populate('department', 'deptName'); // Populate department name
        res.status(200).json({ employeeData });
    } catch (err) {
        console.error('Error fetching employees:', err);
        res.status(500).json({ message: 'Server error while fetching employees' });
    }
});

// Route to add a new employee
router.post('/addEmployee', async (req, res) => {
    try {
        const { empName, emailID, empSalary, departmentName } = req.body;

        if (!empName || !emailID || !empSalary || !departmentName) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Find or create the department by name
        let department = await Department.findOne({ deptName: departmentName });
        
        // If department doesn't exist, create it
        if (!department) {
            department = new Department({ deptName: departmentName });
            await department.save();
        }

        // Create a new employee
        const newEmployee = new Employee({
            empName,
            emailID,
            empSalary,
            department: department._id // Reference the department _id
        });

        await newEmployee.save();
        res.status(201).json({ message: "New employee created successfully", newEmployee });
    } catch (err) {
        console.error('Error creating employee:', err);
        res.status(500).json({ message: 'Server error while creating employee' });
    }
});

export default router;
