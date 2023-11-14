
const express = require('express');
const morgan = require('morgan');
const route = require("./routes/routes.js");

const app = express();
app.use(morgan('dev'));

app.use('/api', route)

require('dotenv').config();
const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})
