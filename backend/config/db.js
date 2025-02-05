const mongoose = require('mongoose');

// Connexion à la base de données MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connexion à MongoDB réussie');
  } catch (err) {
    console.error('Erreur de connexion à MongoDB:', err);
    process.exit(1); // Arrêter l'application en cas d'erreur
  }
};

module.exports = connectDB;
