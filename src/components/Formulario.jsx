import "./Formulario.scss";
import { useContext, useEffect, useState } from "react";
import ProductoContext from "../contexts/ProductoContext";
import { useForm } from "../hooks/useForm";
import DragDrop from "./DragDrop";

const formInicial = {
  id: null,
  nombre: "",
  precio: "",
  stock: "",
  marca: "",
  categoria: "",
  detalles: "",
  foto: "",
  envio: false,
};

const Formulario = ({ productoAEditar, setProductoAEditar }) => {
    // Estados del drag and drop
    const [foto, setFoto] = useState('')
    const [srcImagen, setSrcImagen] = useState('')
  const [form, setForm, handleChange] = useForm(formInicial);
  const { crearProductoContext, actualizarProductoContext } =
    useContext(ProductoContext);

    useEffect(() => {
      if ( productoAEditar ) {
        setSrcImagen(productoAEditar.foto)
        setForm(productoAEditar)
      } else {
        setForm(formInicial)
      }
  
      // productoAEditar ? setForm(productoAEditar) : setForm(formInicial)
    }, [productoAEditar, setProductoAEditar])
  

    const [productos, setProductos] = useState([]);

    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        if (form.id === null) {
          const productoNuevo = { ...form, ...foto };
          const newId = await crearProductoContext(productoNuevo);
          productoNuevo.id = newId;
          setProductos([...productos, productoNuevo]);
        } else {
          const productoEditado = { ...form, ...foto };
          await actualizarProductoContext(productoEditado);
          const nuevaDB = productos.map((producto) =>
            producto.id === productoEditado.id ? productoEditado : producto
          );
          setProductos(nuevaDB);
        }
        handleReset();
      } catch (error) {
        console.error('Ocurrió un error en el handleSubmit', error);
      }
    };

  const handleReset = ()  => {
    setForm(formInicial)
    setProductoAEditar(null)
    setSrcImagen('')
  }


  return (
    <div className="registration-form">
      <form onSubmit={handleSubmit}>
        <h3 className={productoAEditar ? "editing" : "adding"}>
          {productoAEditar ? "Editando" : "Agregando"}
        </h3>
        <fieldset className="registration-form__fieldset">
          <div>
            <label htmlFor="lbl-nombre" className="registration-form__label">
              Nombre
            </label>
            <input
              type="text"
              name="nombre"
              id="lbl-nombre"
              value={form.nombre}
              onChange={handleChange}
              className="registration-form__input"
            />
          </div>
          <div>
            <label htmlFor="lbl-precio" className="registration-form__label">
              Precio
            </label>
            <input
              type="text"
              name="precio"
              id="lbl-precio"
              value={form.precio}
              onChange={handleChange}
              className="registration-form__input"
            />
          </div>
          <div>
            <label htmlFor="lbl-stock" className="registration-form__label">
              Stock
            </label>
            <input
              type="text"
              name="stock"
              id="lbl-stock"
              value={form.stock}
              onChange={handleChange}
              className="registration-form__input"
            />
          </div>
          <div>
            <label htmlFor="lbl-marca" className="registration-form__label">
              Marca
            </label>
            <input
              type="text"
              name="marca"
              id="lbl-marca"
              value={form.marca}
              onChange={handleChange}
              className="registration-form__input"
            />
          </div>
          <div>
            <label htmlFor="lbl-categoria" className="registration-form__label">
              Categoría
            </label>
            <input
              type="text"
              name="categoria"
              id="lbl-categoria"
              value={form.categoria}
              onChange={handleChange}
              className="registration-form__input"
            />
          </div>
          <div>
            <label htmlFor="lbl-detalles" className="registration-form__label">
              Detalles
            </label>
            <input
              type="text"
              name="detalles"
              id="lbl-detalles"
              value={form.detalles}
              onChange={handleChange}
              className="registration-form__input"
            />
          </div>
          {/*  <div>
          <label htmlFor="lbl-foto">Foto</label>
          <input type="text" name="foto" id="lbl-foto" value={form.foto} onChange={handleChange} />
        </div> */}

          <div className="registration-form__dragdrop-envio">
            <DragDrop
            setFoto={setFoto}
            setSrcImagen={setSrcImagen}
            srcImagen={srcImagen}
            />
            <div className="registration-form__envio">
              <label htmlFor="lbl-envio" className="registration-form__label">
                Envío
              </label>
              <input
                type="checkbox"
                name="envio"
                id="lbl-envio"
                checked={form.envio}
                onChange={handleChange}
                className="registration-form__input-envio"
              />
            </div>
          </div>
          <div className="registration-form__buttons">
            <button type="submit" className="registration-form__send">
              Guardar
            </button>
            <button
              type="reset"
              onClick={handleReset}
              className="registration-form__reset"
            >
              Limpiar
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Formulario;
