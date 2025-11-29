const express = require('express');
const router = express.Router();
const { 
    getStudents, 
    getStudentsByID,
    createStudents,
    updatestudents,
    deletestudents,
} = require('../controllers/studentcontroll.js');


router.get('/getall', getStudents);
router.get('/get/:id', getStudentsByID);
router.post('/create', createStudents);
router.put('/update:id', updatestudents);
route.delete('/delete/:id', deletestudents)
module.exports = router