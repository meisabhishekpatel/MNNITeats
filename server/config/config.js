const mongoose = require('mongoose');
require('colors');
const url = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const url = process.env.MONGO_URI;
        const conn = await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('Mongodb DataBase Connected!'.bgCyan.white)
    }
    catch (error) {
        console.log(`error: ${error.message}`.bgRed.white);
    }
}

module.exports = connectDB;