import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [allCars, setAllCars] = useState([]);

  const [filteredCars, setFilteredCars] = useState([]);

  useEffect(() => {
    async function fetchCars() {
      try {
        const res = await fetch("http://localhost:3000/anuncios");
        const data = await res.json();

        setAllCars(data);
        setFilteredCars(data);
      } catch (error) {
        console.error("Erro ao conectar com a API:", error);
      }
    }

    fetchCars();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredCars(allCars);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const resultados = allCars.filter((car) => {
      const model = car.model ? car.model.toLowerCase() : "";
      const brand = car.brand ? car.brand.toLowerCase() : "";

      return model.includes(lowerQuery) || brand.includes(lowerQuery);
    });

    setFilteredCars(resultados);
  };

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "850px",
          margin: "0 auto 30px auto",
        }}
      >
        <h1 style={{ margin: 0 }}>Anúncios Recentes</h1>
        <Link to="/cadastro">
          <button
            style={{
              padding: "10px 20px",
              cursor: "pointer",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            + Novo Anúncio
          </button>
        </Link>
      </header>

      <SearchBar handleSearch={handleSearch} />

      {filteredCars.length === 0 && allCars.length > 0 && (
        <h3
          style={{ textAlign: "center", marginTop: "40px", color: "#e74c3c" }}
        >
          Nenhum veículo encontrado para "
          {document.querySelector("input").value}".
        </h3>
      )}

      <div className="cards">
        {filteredCars.map((car) => (
          <Card key={car.id} car={car} />
        ))}
      </div>
    </>
  );
};

export default Home;
