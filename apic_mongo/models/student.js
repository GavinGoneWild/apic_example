const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    class: {
        type: Number,
        default: 0
    },
    rollNumber: {
        type: Number,
        default: 0
    }
})

exports.Student = mongoose.model('Student', studentSchema);