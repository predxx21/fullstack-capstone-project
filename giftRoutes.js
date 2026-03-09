// backend/routes/giftRoutes.js
const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { connectToDatabase, getDatabase } = require('../config/db');

// Middleware para conectar a la base de datos
router.use(async (req, res, next) => {
    try {
        await connectToDatabase();
        next();
    } catch (error) {
        res.status(500).json({ error: 'Error conectando a la base de datos' });
    }
});

// GET /api/gifts - Obtener todos los regalos
router.get('/', async (req, res) => {
    try {
        const db = getDatabase();
        const gifts = await db.collection('gifts').find({}).toArray();
        res.json(gifts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// GET /api/gifts/:id - Obtener un regalo por ID
router.get('/:id', async (req, res) => {
    try {
        const db = getDatabase();
        const gift = await db.collection('gifts').findOne({
            _id: new ObjectId(req.params.id)
        });
        
        if (!gift) {
            return res.status(404).json({ error: 'Regalo no encontrado' });
        }
        
        res.json(gift);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST /api/gifts - Crear nuevo regalo
router.post('/', async (req, res) => {
    try {
        const db = getDatabase();
        const result = await db.collection('gifts').insertOne(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT /api/gifts/:id - Actualizar regalo
router.put('/:id', async (req, res) => {
    try {
        const db = getDatabase();
        const result = await db.collection('gifts').updateOne(
            { _id: new ObjectId(req.params.id) },
            { $set: req.body }
        );
        
        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'Regalo no encontrado' });
        }
        
        res.json({ message: 'Regalo actualizado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE /api/gifts/:id - Eliminar regalo
router.delete('/:id', async (req, res) => {
    try {
        const db = getDatabase();
        const result = await db.collection('gifts').deleteOne({
            _id: new ObjectId(req.params.id)
        });
        
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Regalo no encontrado' });
        }
        
        res.json({ message: 'Regalo eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
