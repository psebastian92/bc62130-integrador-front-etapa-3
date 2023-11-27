import { useContext } from "react";
import Swal from "sweetalert2";
import "./TablaFila.scss";
import ProductoContext from "../contexts/ProductoContext";

const TablaFila = ({ producto, setProductoAEditar }) => {
  const { eliminarProductoContext } = useContext(ProductoContext);

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `¿Estás seguro de eliminar el producto con el 'id': ${id}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminarlo",
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProductoContext(id);
        Swal.fire("¡Eliminado!", "El producto ha sido eliminado.", "success");
      }
    });
  };

  const handleUpdate = (producto) => {
    setProductoAEditar(producto);
  };

  return (
    <tr>
      <td>{producto.nombre}</td>
      <td>{producto.precio}</td>
      <td>{producto.stock}</td>
      <td>{producto.marca}</td>
      <td>{producto.categoria}</td>
      <td>{producto.detalles}</td>
      <td>
        <img id="img-row" src={producto.foto} alt={producto.nombre} />
      </td>
      <td>{producto.envio ? "SI" : "NO"}</td>
      <td>
        <button onClick={() => handleUpdate(producto)} className="button-edit">
          Editar
        </button>
        <button onClick={() => handleDelete(producto.id)} className="button-delete">
          Borrar
        </button>
      </td>
    </tr>
  );
};

export default TablaFila;
