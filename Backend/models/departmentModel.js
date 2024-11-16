import mongoose from 'mongoose';

const departmentSchema = new mongoose.Schema({
    deptName: { type: String, required: true, unique: true }
});

const Department = mongoose.model('Department', departmentSchema);
export default Department;
