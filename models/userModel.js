const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    EmployeeId: {
        type: String,
        required: true,
        match: /^C[0-9]{1,}$/
    },
    EmployeeName: {
        type: String,
        required: true
    },
    ReportingManager: {
        type: String,
        required: true
    },
    Designation: {
        type: String,
        required: true,
        enum: ['HR', 'Employee']
    },
    Role:{
        type: String,
        required: true,
        enum: ['Admin','User']
    },
    DateOfBirth: {
        type: Date,
        required: true
    },
    EmailId: {
        type: String,
        required: true,
        unique: true,
        match: /^[a-z]+\.[a-z]+@cprime\.com$/
    },
    JoiningDate: {
        type: Date,
        required: true
    },
    Department: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        required: true
    }
}, { collection: 'connect_user' }
)

module.exports = mongoose.model('connect_user', userSchema)