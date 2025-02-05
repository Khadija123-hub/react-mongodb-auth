import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/app_react_mongodb/signup",
        {
          name,
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token); // Stocker le token
      setMessage(response.data.message);

      setTimeout(() => navigate("/home"), 2000); // Rediriger vers Home après 2s
    } catch (err) {
      setMessage(err.response?.data?.message || "Une erreur est survenue.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-3">Inscription</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">
            S'inscrire
          </button>
        </form>

        {message && <p className="text-danger text-center mt-2">{message}</p>}

        <p className="text-center mt-3">
          Déjà inscrit ?{" "}
          <Link to="/" className="text-primary">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
