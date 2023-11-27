import "./Contacto.scss";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = window.location.href;
  };
  return (
    <div className="contact-form">
       <form onSubmit={handleSubmit}>
        <h1 className="contact-form__h1">Escribinos tu consulta📧</h1>
        <fieldset className="contact-form__fieldset">
          <div>
            <label htmlFor="nombre" className="contact-form__label">
              Nombre
            </label>
            <input
              className="contact-form__input"
              type="text"
              name="nombre"
              id="nombre"
              placeholder="Fulanito Perez"
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="email" className="contact-form__label">
              E-mail
            </label>
            <input
              className="contact-form__input"
              type="email"
              name="email"
              id="email"
              placeholder="Ej: mail@gmail.com"
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="direccion" className="contact-form__label">
              Dirección
            </label>
            <input
              className="contact-form__input"
              type="text"
              name="direccion"
              id="direccion"
              placeholder="Calle 1234"
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="telefono" className="contact-form__label">
              Teléfono
            </label>
            <input
              className="contact-form__input"
              type="text"
              name="telefono"
              id="telefono"
              placeholder="01144449999"
              pattern="[0-9]+"
              title="Ingresa solo números de teléfono"
              required
            />
          </div>
          <br />
          <div>
            <label htmlFor="comentarios" className="contact-form__label">
              Comentarios
            </label>
            <textarea
              className="contact-form__input"
              id="comentarios"
              name="comentarios"
              rows="10"
              cols="70"
            ></textarea>
            <br />

            <div className="contact-form__img">
          <img
            className="contact__image"
            src= "/img/ubicacion.png"
            alt="Ubicación"
          />
        </div>
          </div>

          <div className="contact-form__buttons">
            <button className="contact-form__send" type="submit">
              Enviar
            </button>
            <button className="contact-form__reset" type="reset">
              Restablecer
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Contacto;
