// backend/config/db.js
const { MongoClient } = require('mongodb');
require('dotenv').config();

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/giftstore';
const client = new MongoClient(uri);

let database;

async function connectToDatabase() {
    try {
        await client.connect();
        database = client.db('giftstore');
        console.log('Conectado a MongoDB exitosamente');
        return database;
    } catch (error) {
        console.error('Error conectando a MongoDB:', error);
        process.exit(1);
    }
}

function getDatabase() {
    if (!database) {
        throw new Error('Primero debe conectar a la base de datos');
    }
    return database;
}

module.exports = {
    connectToDatabase,
    getDatabase,
    client
};
