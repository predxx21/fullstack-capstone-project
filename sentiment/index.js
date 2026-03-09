/**
 * Módulo de análisis de sentimiento para búsquedas
 * Utiliza el paquete natural para procesamiento de lenguaje natural
 */

// Importar el paquete npm natural (requerido para la tarea)
const natural = require('natural');

// Inicializar componentes de natural
const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;
const TfIdf = natural.TfIdf;
const tfidf = new TfIdf();

// Clasificador de sentimiento básico
const classifier = new natural.BayesClassifier();

// Palabras positivas y negativas para análisis de sentimiento
const positiveWords = ['bueno', 'excelente', 'fantástico', 'genial', 'maravilloso', 'increíble', 'perfecto', 'recomiendo'];
const negativeWords = ['malo', 'terrible', 'horrible', 'pésimo', 'decepcionante', 'defectuoso', 'problema', 'queja'];

/**
 * Analiza el sentimiento de un texto
 * @param {string} text - Texto a analizar
 * @returns {Object} - Resultado del análisis de sentimiento
 */
function analyzeSentiment(text) {
    if (!text) return { sentiment: 'neutral', score: 0 };
    
    const tokens = tokenizer.tokenize(text.toLowerCase());
    let positiveCount = 0;
    let negativeCount = 0;
    
    tokens.forEach(token => {
        if (positiveWords.includes(token)) positiveCount++;
        if (negativeWords.includes(token)) negativeCount++;
    });
    
    const total = positiveCount + negativeCount;
    const score = total === 0 ? 0 : (positiveCount - negativeCount) / total;
    
    let sentiment = 'neutral';
    if (score > 0.2) sentiment = 'positivo';
    if (score < -0.2) sentiment = 'negativo';
    
    return {
        sentiment,
        score,
        positiveWords: positiveCount,
        negativeWords: negativeCount,
        tokens
    };
}

/**
 * Procesa una consulta de búsqueda y extrae palabras clave
 * @param {string} query - Consulta de búsqueda
 * @returns {Array} - Array de tokens procesados
 */
function processSearchQuery(query) {
    if (!query) return [];
    
    // Tokenizar la consulta
    const tokens = tokenizer.tokenize(query.toLowerCase());
    
    // Aplicar stemming a los tokens
    const stemmedTokens = tokens.map(token => stemmer.stem(token));
    
    // Eliminar duplicados
    const uniqueTokens = [...new Set(stemmedTokens)];
    
    return uniqueTokens;
}

/**
 * Calcula la relevancia TF-IDF de términos en documentos
 * @param {Array} documents - Array de strings (documentos)
 * @returns {Object} - Resultados TF-IDF
 */
function calculateTfIdf(documents) {
    if (!documents || documents.length === 0) return {};
    
    const tfidf = new TfIdf();
    
    // Agregar documentos al modelo TF-IDF
    documents.forEach(doc => {
        tfidf.addDocument(doc);
    });
    
    const results = {};
    
    // Calcular TF-IDF para cada término en cada documento
    documents.forEach((doc, docIndex) => {
        results[`document_${docIndex}`] = [];
        tfidf.listTerms(docIndex).forEach(item => {
            results[`document_${docIndex}`].push({
                term: item.term,
                tfidf: item.tfidf
            });
        });
    });
    
    return results;
}

/**
 * Clasifica un texto usando el clasificador Bayesiano
 * @param {string} text - Texto a clasificar
 * @returns {string} - Clasificación
 */
function classifyText(text) {
    if (!text) return 'unknown';
    
    // Entrenar clasificador con algunos ejemplos
    classifier.addDocument('me encanta este producto', 'positivo');
    classifier.addDocument('es excelente', 'positivo');
    classifier.addDocument('funciona perfectamente', 'positivo');
    classifier.addDocument('no me gusta', 'negativo');
    classifier.addDocument('es de mala calidad', 'negativo');
    classifier.addDocument('decepcionado', 'negativo');
    classifier.train();
    
    return classifier.classify(text);
}

/**
 * Encuentra palabras similares usando distancia de Jaro-Winkler
 * @param {string} word - Palabra base
 * @param {Array} candidates - Array de palabras candidatas
 * @param {number} threshold - Umbral de similitud (0-1)
 * @returns {Array} - Palabras similares
 */
function findSimilarWords(word, candidates, threshold = 0.8) {
    if (!word || !candidates || candidates.length === 0) return [];
    
    const jaroWinkler = natural.JaroWinklerDistance;
    const similar = [];
    
    candidates.forEach(candidate => {
        const distance = jaroWinkler(word.toLowerCase(), candidate.toLowerCase());
        if (distance >= threshold) {
            similar.push({
                word: candidate,
                similarity: distance
            });
        }
    });
    
    return similar.sort((a, b) => b.similarity - a.similarity);
}

/**
 * Genera n-gramas de un texto
 * @param {string} text - Texto de entrada
 * @param {number} n - Tamaño del n-grama
 * @returns {Array} - Array de n-gramas
 */
function generateNGrams(text, n = 2) {
    if (!text || n < 1) return [];
    
    const words = tokenizer.tokenize(text.toLowerCase());
    const ngrams = [];
    
    for (let i = 0; i <= words.length - n; i++) {
        ngrams.push(words.slice(i, i + n).join(' '));
    }
    
    return ngrams;
}

// Ejemplo de uso
function runExamples() {
    console.log('=== Ejemplos de uso de natural ===\n');
    
    // Ejemplo 1: Análisis de sentimiento
    const text1 = "Este producto es excelente y fantástico, me encanta";
    const text2 = "El producto es malo y decepcionante, no lo recomiendo";
    
    console.log('Texto 1:', text1);
    console.log('Análisis:', analyzeSentiment(text1));
    console.log('\nTexto 2:', text2);
    console.log('Análisis:', analyzeSentiment(text2));
    
    // Ejemplo 2: Procesamiento de búsqueda
    const query = "comprar regalos para navidad";
    console.log('\nConsulta:', query);
    console.log('Tokens procesados:', processSearchQuery(query));
    
    // Ejemplo 3: Palabras similares
    const candidates = ['regalo', 'obsequio', 'presente', 'donación', 'premio'];
    console.log('\nPalabras similares a "regalo":', 
        findSimilarWords('regalo', candidates));
    
    // Ejemplo 4: N-gramas
    console.log('\nBigramas de "regalos personalizados para ocasiones especiales":',
        generateNGrams('regalos personalizados para ocasiones especiales', 2));
}

// Exportar funciones para uso en otros módulos
module.exports = {
    analyzeSentiment,
    processSearchQuery,
    calculateTfIdf,
    classifyText,
    findSimilarWords,
    generateNGrams,
    tokenizer,
    stemmer,
    TfIdf,
    runExamples
};

// Ejecutar ejemplos si se ejecuta directamente
if (require.main === module) {
    runExamples();
}
