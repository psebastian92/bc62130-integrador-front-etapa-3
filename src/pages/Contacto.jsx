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
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.6438599606713!2d-58.45296968843415!3d-34.587876956549344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5f019c0a135%3A0xb0f0e5c32189ef4b!2sAv.%20Jorge%20Newbery%204000%2C%20CABA!5e0!3m2!1ses!2sar!4v1701541584817!5m2!1ses!2sar"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
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
