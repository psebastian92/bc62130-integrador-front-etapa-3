import { Link } from 'react-router-dom'
import './Header.scss'
import Navbar from './Navbar'

const Header = () => {
  return (
    <header className="main-header">
    <input type="checkbox" id="menu"/>

    <Navbar/>

     <div className="search-bar"> {/*<!-- search-bar --> */}
      <div className="search-bar__logo-container">
        <i className="fa-solid fa-microchip search-bar__logo-img "></i>
      </div>
      <form action="" className="search-bar__form-container">
        <label htmlFor="busqueda" className="search-bar__htmlForm-label">Buscar</label>
        <input type="search" className="search-bar__form-search" id="busqueda"/>
        <input type="submit" value="Buscar" className="search-bar__form-submit"/>
      </form>
      <Link className="search-bar__carrito-container" to="/carrito">C</Link>
      <div className="menu-toggle">
        <label htmlFor="menu" className="menu-toggle__label">
          <span className="menu-toggle__top-bread"></span>
          <span className="menu-toggle__meat"></span>
          <span className="menu-toggle__bottom-bread"></span>
        </label>
      </div>
     </div> {/*<!-- search-bar --> */}
  </header>

  )
}

export default Header