const { request, response } = require('express');
const db = require('../config/db.js');
const getStudents = async (request, respone) => 
{
      try
    {
        const [records] = await db.query(`SELECT * FROM students`)
        if(!data)
        {
            return respone.status(404).send(
                {
                    success: false,
                    message: 'No Records is here',
                })
        }
        respone.status(200).send(
            {
                success: true,
                message: 'All student into records',
                totalStudents: data[0].length,
                records,
                
            })
    }
    catch(err)
    {
        console.log(err);
        respone.status(500).send(
            {
                success:false,
                message: 'Error in here student route api',
                err
            })
        
      }
    }
//Get students by ID
const getStudentsByID = async (request, respone) => 
    {
       const studentId = request.params.id
       if(!studentId)
       {
        return respone.status(404).send(
            {
                success: false,
                message: 'Invalid or provide student id'
            })
       }
    const  data = await db.query(`SELECT * FROM students WHERE id=?`, {studentId})
    if(!data)
    {
       return respone.send(404).send(
        {
            success: false,
            message: 'No Record in here!!',
            error,
        })
    }
    respone.status(200).send(
        {
            success: false,
            studentId: data[0],

        })
    };
    
    const createStudents = async () => 
        {
            try
            {
                const {name, roll_no, medium,fees} = request.body
                if(!name || !roll_no || !medium || !fees)
                {
                    return response.status(500).send(
                        {
                            success: false,
                            message: 'Please provide all fields',
                        })
                }
                const data = await db.query(`INSERT INTO students (name, roll_no, class, fees, medium) VALUE (? , ? , ? , ?)`,[name, roll_no, fees, medium])
                if(!data)
                {
                    return response.status(404).send(
                        {
                            success: false,
                            message: 'Error in INSERT QUERY'
                        })
                }
            }
            catch (error)
            {
              console.log(error)
              respone.status(500).send(
                {
                    success: false,
                    message: 'Error In creat student API',
                    error,
                })
              
            }
        };

        const updatestudents = async(request, respone) => {
            console.log(error);
            try
            {
               const studentId = request.params.id
               if(!studentId)
               {
                return respone.status(404).send(
                    {
                       success: false,
                       message: 'Invide ID or provide id',
                    })
               }
               const {name, roll_no, fees, medium} = request.body
               const data = await db.query(`UPDATE students SET name = ?, roll_no = ?, fees = ?, medium = ?, WHERE = id`, 
               [name, roll_no, fees, medium,studentId]
            );
            if (!data)
            {
                return respone.status(500).send(
                    {
                        success: false,
                        message: 'Error In update Data',
                    });       
            }
            respone.status(200).send(
                {
                    success: true,
                    message: "student details updated",
                });

            }
            catch (error)
            {
               respone.send(500).send(
                {
                    success: false,
                    message: 'Error In update student API',
                    error
                })
            }        
        };
        // <--------------| HERE ARE CODE FOR DELETE STUDENTS|------------------->
        // ***********************************************************************//
                    // <--------------| END |------------------->

module.exports = { getStudents }