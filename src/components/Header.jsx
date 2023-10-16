  import { Link } from "react-router-dom";
  import "./Header.scss";
  import Navbar from "./Navbar";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
  import { faMicrochip } from "@fortawesome/free-solid-svg-icons"

  const Header = () => {
    return (
      <header className="main-header">
        <input type="checkbox" id="menu" />
        <Navbar />
        <div className="search-bar">
          {" "}
          {/*<!-- search-bar --> */}
          <div className="search-bar__logo-container">
          <FontAwesomeIcon icon={faMicrochip} className="search-bar__logo-img" />
          </div>
          <form action="" className="search-bar__form-container">
            <label htmlFor="busqueda" className="search-bar__htmlForm-label">
              Buscar
            </label>
            <input
              type="search"
              className="search-bar__form-search"
              id="busqueda"
            />
            <input
              type="submit"
              value="Buscar"
              className="search-bar__form-submit"
            />
          </form>
          <div className="search-bar__carrito-container">
            <Link to="/carrito">
            <FontAwesomeIcon icon={faShoppingCart} className="search-bar__cart-icon"/>
            </Link>
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
