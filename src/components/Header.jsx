import { useContext, useState } from 'react'
import { Link } from "react-router-dom";
import "./Header.scss";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"; // Importa el ícono de lupa
import CarritoContext from "../contexts/CarritoContext";

const Header = () => {
  const { carrito } = useContext(CarritoContext);
  const [mostrarBuscar, setMostrarBuscar] = useState(window.innerWidth > 768);

  const contadorCarrito = carrito ? carrito.length : 0;

  // Función para manejar el cambio en el ancho de la pantalla
  const handleResize = () => {
    setMostrarBuscar(window.innerWidth > 768);
  };

  // Agregar un event listener para el cambio de tamaño de la ventana
  window.addEventListener("resize", handleResize);

  // Función para manejar el clic en el botón de búsqueda
  const handleBuscarClick = () => {
    // Aquí puedes definir lo que sucede cuando se hace clic en el botón de búsqueda
    // Por ejemplo, puedes realizar una búsqueda o mostrar un campo de búsqueda expandido, etc.
  };

  return (
    <header className="main-header">
      <input type="checkbox" id="menu" />
      <Navbar />
      <div className="search-bar">
        <div className="search-bar__logo-container">
          <FontAwesomeIcon icon={faMicrochip} className="search-bar__logo-img" />
        </div>
        <form action="" className="search-bar__form-container">
          <label htmlFor="busqueda" className="search-bar__htmlForm-label">
            Búsqueda
          </label>
          <input
            type="search"
            className="search-bar__form-search"
            id="busqueda"
          />
          {mostrarBuscar ? (
            <input
              type="submit"
              value="Buscar"
              className="search-bar__form-submit"
              onClick={handleBuscarClick} // Agregar la función de manejo de clic
            />
          ) : (
            <button
              className="search-bar__form-submit"
              onClick={handleBuscarClick} // Agregar la función de manejo de clic
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          )}
        </form>
        <div className="search-bar__carrito-container">
          <Link to="/carrito">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="search-bar__carrito-icon"
            />
          </Link>
          <div className="search-bar__carrito-contador">{contadorCarrito}</div>
        </div>
        <div className="menu-toggle">
          <label htmlFor="menu" className="menu-toggle__label">
            <span className="menu-toggle__top-bread"></span>
            <span className="menu-toggle__meat"></span>
            <span className="menu-toggle__bottom-bread"></span>
          </label>
        </div>
      </div>{" "}
      {/*<!-- search-bar --> */}
    </header>
  );
};

export default Header;
