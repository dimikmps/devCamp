const express = require('express');
const dotenv = require('dotenv');
// Router files
const router = require('./routes/router');
// Middleware files
const logger = require('./middleware/logger');
// Load env vars
dotenv.config({ path: './.env' });

const app = express();

// Mount logging middleware
app.use(logger);

// Mount routers
app.use('/api/v1/bootcamps', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`SERVER RUNNING IN ${process.env.NODE_ENV} ON PORT: ${PORT}`));
