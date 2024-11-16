import mongoose from 'mongoose';

const employeeSchema = new mongoose.Schema({
    empName: { type: String, required: true, max: 30 },
    emailID: { type: String, required: true, max: 40 },
    empSalary: { type: Number, required: true, min: 1500 },
    department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' }
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;
