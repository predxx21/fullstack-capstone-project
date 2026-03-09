// backend/routes/searchRoutes.js
const express = require('express');
const router = express.Router();
const { getDatabase } = require('../config/db');

// GET /api/search - Buscar regalos por categoría
router.get('/', async (req, res) => {
    try {
        const db = getDatabase();
        const { category, minPrice, maxPrice, query } = req.query;
        
        let filter = {};
        
        // Filtrar por categoría
        if (category) {
            filter.category = category;
        }
        
        // Filtrar por rango de precio
        if (minPrice || maxPrice) {
            filter.price = {};
            if (minPrice) filter.price.$gte = parseFloat(minPrice);
            if (maxPrice) filter.price.$lte = parseFloat(maxPrice);
        }
        
        // Búsqueda por texto
        if (query) {
            filter.$or = [
                { name: { $regex: query, $options: 'i' } },
                { description: { $regex: query, $options: 'i' } },
                { category: { $regex: query, $options: 'i' } }
            ];
        }
        
        const gifts = await db.collection('gifts').find(filter).toArray();
        res.json(gifts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/search/categories - Obtener todas las categorías
router.get('/categories', async (req, res) => {
    try {
        const db = getDatabase();
        const categories = await db.collection('gifts').distinct('category');
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
