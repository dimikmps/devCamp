const express = require('express');
const dotenv = require('dotenv');

// Router files
const router = require('./routes/router');

// Load env vars
dotenv.config({ path: './.env' });

const app = express(); 

// Mount routers
app.use('/api/v1/bootcamps', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} ON PORT: ${PORT}`));