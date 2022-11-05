require('dotenv').config({path:'.env'});
const sequelize = require('./database/db');
const app = require('./app');
require('./models/associations');

const PORT = 3000;

async function connectDB() {
    try {
        // await sequelize.sync({force:true});
        await sequelize.authenticate();
        app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

connectDB();