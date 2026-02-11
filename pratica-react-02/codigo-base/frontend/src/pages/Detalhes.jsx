import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Detalhes = () => {
  const { id } = useParams();
  const [carro, setCarro] = useState(null);

  useEffect(() => {
    async function fetchCarroDetails() {
      try {
        const res = await fetch(`http://localhost:3000/anuncios/${id}`);
        const data = await res.json();
        setCarro(data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do anúncio:", error);
      }
    }

    fetchCarroDetails();
  }, [id]);

  if (!carro) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "50px" }}>
        Carregando detalhes...
      </h2>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Detalhes do Anúncio</h1>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "bold",
          }}
        >
          Voltar para Home
        </Link>
      </header>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
        }}
      >
        {carro.imageUrl && (
          <img
            src={carro.imageUrl}
            alt={`${carro.brand} ${carro.model}`}
            style={{
              width: "100%",
              height: "400px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
        )}

        <h2>
          {carro.brand} {carro.model}
        </h2>
        <p
          style={{
            fontSize: "1.5em",
            color: "#2c3e50",
            fontWeight: "bold",
            margin: "10px 0",
          }}
        >
          R$ {carro.price}
        </p>

        <p style={{ lineHeight: "1.6" }}>
          <strong>Descrição:</strong>{" "}
          {carro.description || "Nenhuma descrição informada."}
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginTop: "15px",
            marginBottom: "15px",
            flexWrap: "wrap",
          }}
        >
          <p>
            <strong>Ano:</strong> {carro.year}
          </p>
          <p>
            <strong>Quilometragem:</strong> {carro.km} km
          </p>
          <p>
            <strong>Categoria:</strong> {carro.category}
          </p>
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#e8f6f3",
            borderRadius: "8px",
            borderLeft: "5px solid #16a085",
          }}
        >
          <p style={{ margin: 0, fontSize: "1.1em" }}>
            <strong>Contato do Vendedor:</strong>{" "}
            {carro.contact || "Não informado"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Detalhes;
