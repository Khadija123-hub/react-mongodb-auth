import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/app_react_mongodb/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (err) {
      setMessage(err.response?.data?.message || "Identifiants incorrects.");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4" style={{ width: "400px" }}>
        <h2 className="text-center mb-3">Connexion</h2>
        <form onSubmit={handleLogin}>
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
          <button type="submit" className="btn btn-primary w-100">
            Se connecter
          </button>
        </form>
        {message && <p className="text-danger text-center mt-2">{message}</p>}
        <p className="text-center mt-3">
          Pas encore inscrit?{" "}
          <Link to="/signup" className="text-primary">
            S'inscrire
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
