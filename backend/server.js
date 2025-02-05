const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config(); // Assure-toi de charger les variables d'environnement

const app = express();

// Connexion à la base de données
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/app_react_mongodb', authRoutes); // Assure-toi que ce fichier existe

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
