import "./Carrito.scss";
const Carrito = () => {
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
          <tr>
            <td>foto</td>
            <td>nombre</td>
            <td>cantidad</td>
            <td>precio</td>
            <td>acciones</td>
          </tr>
        </tbody>
        <tbody></tbody>
      </table>
    </>
  );
};

export default Carrito;
