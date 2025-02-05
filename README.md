# Mon Projet React avec MongoDB

Ce projet utilise React.js pour le frontend et MongoDB comme base de données. Il inclut des fonctionnalités d'authentification avec inscription, connexion, et affichage de la page d'accueil pour les utilisateurs authentifiés. Le backend est basé sur Node.js et MongoDB pour la gestion des données utilisateurs.

## Structure du Projet

Le projet est divisé en deux parties principales :

- **Frontend** : Situé dans le dossier `frontend`, qui contient les composants React pour l'inscription, la connexion et la page d'accueil.
- **Backend** : Situé dans le dossier `backend`, qui contient la logique serveur, la configuration de la base de données, les routes, les modèles et les contrôleurs.

### Dossiers du projet :
- **backend** :
  - `.env` : Contient les variables d'environnement.
  - `config/db.js` : Configuration de la connexion à MongoDB.
  - `routes/` : Contient les fichiers de routes.
  - `models/` : Contient les modèles de la base de données.
  - `controllers/` : Contient la logique de gestion des requêtes.
  - `server.js` : Le fichier principal du serveur backend.

- **frontend** :
  - `home.js` : Affiche les informations de l'utilisateur connecté.
  - `signup.js` : Composant pour l'inscription d'un nouvel utilisateur.
  - `login.js` : Composant pour la connexion d'un utilisateur existant.

## Fonctionnalités

- **Inscription** : Permet à un utilisateur de s'inscrire avec un nom, un email et un mot de passe. Un token JWT est généré et stocké dans le localStorage.
- **Connexion** : Permet à un utilisateur de se connecter avec son email et son mot de passe. Le token JWT est également stocké dans le localStorage.
- **Page d'accueil** : Affiche les informations de l'utilisateur connecté, y compris son nom et son email. Un bouton de déconnexion permet de se déconnecter.

## Technologies Utilisées

- **Frontend** :
  - React.js
  - React Router (pour la navigation)
  - Axios (pour les requêtes HTTP)
  - Bootstrap (pour le style)
  
- **Backend** :
  - Node.js
  - Express.js
  - MongoDB
  - JWT (JSON Web Tokens) pour l'authentification


