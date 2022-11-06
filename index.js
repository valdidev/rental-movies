require('dotenv').config({ path: '.env' });
require('colors');
const sequelize = require('./database/db');
const app = require('./app');

const winston = require('./config/winston');

require('./models/associations');


const PORT = process.env.SERVICE_PORT;

async function connectDB() {
    try {
        // await sequelize.sync();
        await sequelize.authenticate();
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`.bgGreen.black));
    } catch (error) {
        winston.error(`Status: ${error.status || 500} Message: ${error.message}`)
        console.error('Unable to connect to the database:'.bgRed, error);
    }
}

connectDB();