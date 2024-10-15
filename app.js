const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const servicesRouter = require('./routes/services'); // Assuming this file exists and contains your routes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json()); // Parses incoming requests with JSON payloads

// Routes
app.use('/api/services', servicesRouter); // Use the services router for '/api/services'

// Root Endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the Healthcare Services API');
});

// Connect to MongoDB and Start Server
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/HEALTH_CARE';

const startServer = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.error('Failed to connect to MongoDB', err);
    }
};

startServer();

// Optional: Handle 404 Errors
app.use((req, res, next) => {
    res.status(404).send({ message: 'Endpoint not found' });
});

// Optional: Global Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ message: 'Something went wrong!' });
});

// Optional: Handle Server Errors Gracefully
app.on('error', (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof PORT === 'string' ? 'Pipe ' + PORT : 'Port ' + PORT;

    // Handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
});

module.exports = app; // Exporting for testing purposes
