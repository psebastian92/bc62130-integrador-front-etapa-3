import { useContext } from "react";
import "./Carrito.scss";
import CarritoContext from "../contexts/CarritoContext";

const Carrito = () => {
  const { carrito, eliminarCarritoContext } = useContext(CarritoContext);

  const handleEliminar = (id) => {
    //console.log(id)
    eliminarCarritoContext(id);
  };

  return (
    <>
      <h1>Listado de productos en el carrito</h1>
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
              <td colSpan={5}>
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
                  <button onClick={() => handleEliminar(producto.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
};

export default Carrito;
