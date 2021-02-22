const express = require('express');
const router = express.Router();
const {Student} = require('../models/student');


router.post('/', async (req, res) => {
    let student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        class: req.body.class,
        rollNumber: req.body.rollNumber
    })
    student = await student.save();
    if(!student) 
        return res.status(500).send('Student can not be created');
    res.send(student);
})

// Get student by id
router.get('/:id', async (req, res) => {
    const student = await Student.findById(req.params.id);
    if(!student)
        return res.status(500).send('A student with this ID can not be found');
    res.send(student); 
})

// Get all students
router.get('/', async (req, res) => {
    const studentList = await Student.find(req.params.id);
    if(!studentList)
        return res.status(500).json({success: false});
    res.send(studentList); 
})

module.exports = router;