import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";
const Cadastro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    model: "",
    brand: "",
    category: "",
    description: "",
    price: "",
    year: "",
    km: "",
    contact: "",
    imageUrl: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const novoAnuncio = {
      ...formData,
      price: parseFloat(formData.price),
      year: parseInt(formData.year),
      km: parseInt(formData.km),
    };

    try {
      const res = await fetch("http://localhost:3000/anuncios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoAnuncio),
      });

      if (res.ok) {
        alert("Anúncio cadastrado com sucesso!");
        navigate("/");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", error);
      alert("Erro ao conectar com o servidor.");
    }
  };

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "500px",
          margin: "0 auto 20px auto",
        }}
      >
        <h1 style={{ margin: 0 }}>Cadastrar Novo Anúncio</h1>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#007bff",
            fontWeight: "bold",
            border: "1px solid #007bff",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          Voltar para Home
        </Link>
      </header>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <input
          type="text"
          name="model"
          placeholder="Modelo / Título do anúncio"
          required
          value={formData.model}
          onChange={handleChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Marca (ex: Fiat, Chevrolet)"
          required
          value={formData.brand}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Categoria (ex: Hatch, SUV)"
          required
          value={formData.category}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Descrição detalhada do veículo"
          required
          rows="4"
          value={formData.description}
          onChange={handleChange}
        ></textarea>

        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="number"
            name="price"
            placeholder="Preço (R$)"
            required
            value={formData.price}
            onChange={handleChange}
            style={{ flex: 1 }}
          />
          <input
            type="number"
            name="year"
            placeholder="Ano"
            required
            value={formData.year}
            onChange={handleChange}
            style={{ flex: 1 }}
          />
          <input
            type="number"
            name="km"
            placeholder="Quilometragem"
            required
            value={formData.km}
            onChange={handleChange}
            style={{ flex: 1 }}
          />
        </div>

        <input
          type="text"
          name="contact"
          placeholder="Contato do Vendedor (Telefone/WhatsApp)"
          required
          value={formData.contact}
          onChange={handleChange}
        />
        <input
          type="url"
          name="imageUrl"
          placeholder="URL da Imagem de Capa"
          required
          value={formData.imageUrl}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{ padding: "10px", marginTop: "10px", cursor: "pointer" }}
        >
          Cadastrar Anúncio
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
