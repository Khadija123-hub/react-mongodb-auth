import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/app_react_mongodb/getUser",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setUser(response.data);
      } catch (err) {
        console.error("Erreur:", err);
        localStorage.removeItem("token"); // Supprime le token en cas d'erreur
        navigate("/");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Chargement...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100">
      <div className="card shadow-lg p-4 text-center" style={{ width: "400px" }}>
        <h1 className="mb-3">Bienvenue, {user?.name} 👋</h1>
        <p className="text-muted">Email: {user?.email}</p>
        <button className="btn btn-danger w-100" onClick={handleLogout}>
          Déconnexion
        </button>
      </div>
    </div>
  );
};

export default Home;
