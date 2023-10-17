import { useContext } from "react";
import "./Carrito.scss";
import CarritoContext from "../contexts/CarritoContext";

const Carrito = () => {
  const { carrito, eliminarCarritoContext, guardarCarritoContext  } = useContext(CarritoContext);

  const handleEliminar = (id) => {
    //console.log(id)
    eliminarCarritoContext(id);
  };

  const calcularTotal = () => {
    let sumaTotal = carrito.reduce((total, prod) => {
      return total + (prod.precio * prod.cantidad)
    }, 0)
    return sumaTotal
  }

  const handleComprar = () => {
    guardarCarritoContext()
  }

  return (
    <>
      <h1 className="carrito-h1">Listado de productos en el carrito</h1>
      
      <table className="tabla-carrito">
        <thead>
          <tr>
            <th>Foto</th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {carrito.length <= 0 ? (
            <tr>
              <td colSpan={5} style={{textAlign: 'center'}}>
                <strong>No hay productos</strong>
              </td>
            </tr>
          ) : (
            carrito.map((producto, idx) => (
              <tr key={idx}>
                <td>
                  <img src={producto.foto} alt={producto.nombre} width="50px" />
                </td>
                <td>{producto.nombre}</td>
                <td>{producto.cantidad}</td>
                <td>{producto.precio}</td>
                <td>
                  <button onClick={() => handleEliminar(producto.id)} className="button-carrito">
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
           <tr>
            <td colSpan={3}><strong>Total</strong></td>
            <td><strong>${parseFloat(calcularTotal()).toFixed(2)}</strong></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="comprar">
      { !carrito.length <= 0 && <button onClick={handleComprar} className="comprar__button">Comprar</button>}
      </div>
    </>
  );
};

export default Carrito;
