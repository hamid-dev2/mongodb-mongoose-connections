const { MongoClient } = require('mongodb');
const { mongodb : { HOST, PORT, DB } } = require('../config/database');

let database;

exports.mongoConnect = async () => {
    try {
        const result = await MongoClient.connect(`mongodb://${HOST}:${PORT}/${DB}`)
        console.log("Mongodb was connected successfully.");
        database = result.db() 

        return result
    } catch (err) {
        console.log(`Mongodb was not connected! - ${err}`);
    }
}

exports.getDb = () => {
    if(database) {
        return database
    }

    throw new Error("DB was not found!")
}