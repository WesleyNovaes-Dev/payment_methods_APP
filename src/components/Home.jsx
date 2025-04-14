import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <img src="/perfil.png" alt="Perfil" className="perfil-img" />
        <h1>Formulário de Pagamento</h1>
        <p>Escolha o método e prossiga</p>
        <Link to="/pagamento">
          <button className="btn-amarelo">Ir para pagamento</button>
        </Link>
      </div>
    </div>
  );
};
