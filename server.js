const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const mySqlPool = require('./config/db');
const app = express();
dotenv.config();


app.use(morgan("dev"));
app.use(express.json());
app.get('/test',(request, response) =>{
    response.status(200).send(' <h1>Hello express with mysql</h1>')
});

//route api
app.use("/api/v1/student", require("./routes/studentroute"));
app.use("/test", (request, respone) => {
    respone.status(200).send("<h1>Node js is start to her App!!</h1>")
})

const PORT = process.env.PORT || 3306;
mySqlPool
.query('SELECT 1 ')
.then(() => {
    console.log("Mysql connected".bgCyan.white);
    app.listen(PORT, () => {
    console.log(`server is started ${process.env.PORT}`.bgMagenta.white);
    
}).catch((eror) => {
    console.log(eror);
    
})
    
})




