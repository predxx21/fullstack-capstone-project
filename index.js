// backend/index.js
const app = require('./app');
const { connectToDatabase } = require('./config/db');
const natural = require('natural'); // Importar paquete npm natural
const port = process.env.PORT || 5000;

// Inicializar tokenizer para búsqueda avanzada
const tokenizer = new natural.WordTokenizer();

// Conectar a MongoDB y iniciar servidor
connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Servidor corriendo en puerto ${port}`);
    });
}).catch(error => {
    console.error('Error iniciando servidor:', error);
    process.exit(1);
});

// Función de ejemplo usando natural para procesamiento de texto
function processSearchQuery(query) {
    if (!query) return [];
    return tokenizer.tokenize(query.toLowerCase());
}

module.exports = { processSearchQuery };
