import React, { useContext, useState } from "react";
import "./Card.scss";
import CarritoContext from "../contexts/CarritoContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";


const Card = ({ producto }) => {
  const { agregarCarritoContext } = useContext(CarritoContext);
  const [mostrarMensaje, setMostrarMensaje] = useState(false);

  const handleClick = (producto) => {
    agregarCarritoContext(producto);
    setMostrarMensaje(true);

    setTimeout(() => {
      setMostrarMensaje(false);
    }, 3000);
  };

  return (
    <div className="card">
      <article className="card__article">
        <div className="card__image-container">
          <img
            className="card__image"
            src={producto.foto}
            alt={producto.nombre}
          />
        </div>
        <div className="card__content">
          <h2 className="card__header">{producto.nombre}</h2>
          <div className="card__description">
            <p>{producto.detalles}</p>
          </div>
        </div>
        <div className="card__addToCart-container">
          <FontAwesomeIcon
            icon={faCartPlus}
            className="card__addToCart-icon"
            onClick={() => handleClick(producto)}
          />
          {mostrarMensaje && (
            <div
              className={`card__success-message ${mostrarMensaje ? "card__show-success-message" : "card__hide-success-message"}`}
            >
             <FontAwesomeIcon className="card__success-message-icon" icon={faCheck} style={{color: "#2cf005",}} />
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default Card;
