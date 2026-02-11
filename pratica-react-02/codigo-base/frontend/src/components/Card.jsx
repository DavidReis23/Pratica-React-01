import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ car }) => {
  return (
    <Link
      to={`/anuncio/${car.id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="card">
        <h2>{car.model}</h2>
        <ul>
          <li>
            <span>Marca:</span> {car.brand}
          </li>
          <li>
            <span>Categoria:</span> {car.category}
          </li>
          <li>
            <span>Ano:</span> {car.year}
          </li>
          <li>
            <span>Quilometragem:</span> {car.km} km
          </li>
          <li>
            <span>Preço:</span> R$ {car.price}
          </li>
        </ul>
      </div>
    </Link>
  );
};

export default Card;
