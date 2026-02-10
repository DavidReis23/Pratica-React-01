import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "../App.css";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [cars, setCars] = useState([]);

  async function fecthCars() {
    const res = await fetch("http://localhost:3000/anuncios");
    const data = await res.json();
    setCars(data);
  }

  useEffect(() => {
    fecthCars();
  }, []);

  const handleSearch = async (query) => {
    if (query) {
      const res = await fetch(
        `http://localhost:3000/anuncios?model_like=${query}`,
      );
      const data = await res.json();
      setCars(data);
    } else {
      fecthCars();
    }
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Anúncios Recentes</h1>
        <Link to="/cadastro">
          <button style={{ padding: "10px", cursor: "pointer" }}>
            + Novo Anúncio
          </button>
        </Link>
      </header>
      <SearchBar handleSearch={handleSearch} />
    </>
  );
};

export default Home;
