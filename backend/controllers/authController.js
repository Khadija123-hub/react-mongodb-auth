const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Clé secrète pour le JWT
const SECRET_KEY = 'your_secret_key';

// Inscription
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Cet email est déjà utilisé.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id, name: newUser.name, email: newUser.email }, SECRET_KEY, { expiresIn: '1h' });

    res.status(201).json({ message: 'Compte créé avec succès', token, user: { name: newUser.name, email: newUser.email } });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Connexion
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({ message: 'Email ou mot de passe incorrect' });
    }

    const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ message: 'Connexion réussie', token, user: { name: user.name, email: user.email } });
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};

// Récupérer les infos utilisateur
exports.getUser = async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Accès refusé' });

    const decoded = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(decoded.id).select('-password');

    if (!user) return res.status(404).json({ message: 'Utilisateur non trouvé' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
