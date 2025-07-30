const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const { connectToDatabase } = require("./db/connection");

const app = express();
const PORT = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

//routes
const routes = require('./routes');
app.use('/', routes);

// Connect to MongoDB first, then start server
connectToDatabase().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.error("Failed to connect to DB, server not started:", err);
});