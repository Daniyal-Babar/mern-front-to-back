const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGODB_URI');

const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('MongoDB Connected ✅');
    } catch (error) {
        console.log(error.message, 'MongoDB Connection Failed ❌');
        // Exit Process with failure
        process.exit(1);
    }
}

module.exports = connectDB;
