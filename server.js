 const express = require('express')
 const dotenv = require('dotenv')

 // Load env vars
 dotenv.config({path: './.env'});

 const app = express();

 const  PORT = process.env.PORT || 5000;
 
 app.listen(PORT, console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} ON PORT: ${PORT}`));