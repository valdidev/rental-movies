require('dotenv').config({ path: '.env' });
require('colors');
const sequelize = require('./database/db');
const app = require('./app');

require('./models/associations');


const PORT = process.env.SERVICE_PORT;

async function connectDB() {
    try {
        // await sequelize.sync({force:true});
        await sequelize.authenticate();
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`.bgGreen.black));
    } catch (error) {
        console.error('Unable to connect to the database:'.bgRed, error);
    }
}

connectDB();