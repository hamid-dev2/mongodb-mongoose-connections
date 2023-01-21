const mongoose = require('mongoose');
const { mongodb : { HOST, PORT, DB } } = require('../config/database');


module.exports = async () => {
    try {
        const db = await mongoose.connect(`mongodb://${HOST}:${PORT}/${DB}`)
        console.log("mongoose was connected successfully.");

        return db
    } catch (err) {
        console.log("mongoose was not connected!");
    }
}