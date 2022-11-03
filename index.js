const express = require('express');
const sequelize = require('./database/db');
require('./models/associations');

const app = express();

const PORT = 3000;

async function connectDB() {
    try {
        await sequelize.authenticate();
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDB();