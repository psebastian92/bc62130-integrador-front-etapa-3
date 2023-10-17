import { useContext } from 'react'
import Card from '../components/Card'
import './Inicio.scss'
import ProductoContext from '../contexts/ProductoContext'

const Inicio = () => {
  const { productos } = useContext(ProductoContext)

  const cantidadProductos = productos ? productos.length : 0;

  return (
  <main>
    <section className="section-cards">
      <header className="section-cards__header">
        <h1 className='section-cards__header-h1'>ArduShop</h1>
        <p className='section-cards__header-p'>Se encontraron  <span className='section-cards__header-p__cantproducts'>{cantidadProductos}</span> productos</p>
      </header>

      <div className="cards-container">
        {
          productos && productos.map( (producto, idx) => (
            <Card key={idx} producto={producto} />
          ))
        }
        
      </div> {/* <!-- .cards-container --> */}

    </section> {/* <!-- .section-cards --> */}
  </main> 
  )
}

export default Inicio