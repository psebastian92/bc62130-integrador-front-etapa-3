import './Contacto.scss';

const Contacto = () => {
  return (
  

  <div className="contact-form">
    <form action="URL" method="post">
      <fieldset className="contact-form__fieldset">
        <div>
          <label htmlFor="nombre" className="contact-form__label">Nombre</label>
          <input className ="contact-form__input" type="text" name="nombre" id="nombre" required/>
        </div>
        <br/>
        <div>
          <label htmlFor="email" className="contact-form__label">E-mail</label>
          <input className ="contact-form__input" type="email" name="email" id="email" placeholder="Ej: mail@gmail.com" required/>
        </div>
        <br/>
        <div>
          <label htmlFor="comentarios" className="contact-form__label">Comentarios</label>
          <textarea className ="contact-form__input" id="comentarios" name="comentarios" rows="10" cols="70"></textarea><br/>
        </div>

        <div className="contact-form__buttons">
          <button className="contact-form__send" type="submit">Enviar</button>
          <button className="contact-form__reset" type="reset">Restablecer</button>
      </div>

      </fieldset>
    </form>

 </div> 

  

  )
}

export default Contacto