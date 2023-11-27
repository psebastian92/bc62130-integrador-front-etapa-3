import "./Nosotros.scss";

const Nosotros = () => {
  return (
    <section className="about-us">
      <header className="about-us__title">
        <h1>¿Quiénes somos?🌎</h1>
      </header>
      <div className="about-us__content-img">
          <img className="about-us__imagen" src="img/nosotros.jpeg" alt="" />
        </div>
      <div className="about-us__content">
        <p className="about-us__span">¡Bienvenidos a ArduShop!</p>
        <p className="about-us__parrafo">
          Somos tu destino confiable y apasionado para todo lo relacionado con
          el emocionante y creativo mundo de Arduino. Desde 2020, hemos estado
          brindando soluciones innovadoras y productos de alta calidad en la
          Ciudad Autónoma de Buenos Aires y más allá. Nos enorgullecemos de ser
          líderes en la venta de artículos de Arduino, atendiendo tanto a
          clientes mayoristas como minoristas.
        </p>
        <p className="about-us__parrafo">
          Nuestra historia comenzó con la pasión por la electrónica y la
          programación. Impulsados por el deseo de compartir nuestra fascinación
          por Arduino, decidimos establecer ArduShop. A lo largo de los años,
          hemos cultivado relaciones sólidas con fabricantes y proveedores
          confiables, lo que nos permite ofrecerte una amplia gama de productos
          que abarcan desde placas Arduino hasta componentes y accesorios
          especializados.
        </p>
        <p className="about-us__parrafo">
          Lo que nos distingue es nuestro compromiso inquebrantable con la
          satisfacción del cliente. Nos esforzamos por brindar un servicio
          personalizado que se adapte a tus necesidades específicas, ya sea que
          estés comenzando tu viaje en el mundo de la electrónica o que seas un
          experto en Arduino. Nuestro equipo de expertos apasionados está aquí
          para asesorarte, responder tus preguntas y proporcionarte la
          orientación necesaria para que tus proyectos se conviertan en
          realidad.
        </p>
        <p className="about-us__parrafo">
          Ya sea que estés buscando expandir tus capacidades creativas, impulsar
          la educación en STEM o llevar a cabo proyectos innovadores, ArduShop
          es tu socio confiable en cada paso del camino.
        </p>
        <p className="about-us__parrafo">
          Te invitamos a explorar nuestra colección de productos y descubrir
          cómo Arduino puede abrir un mundo de posibilidades. ¡Gracias por
          elegirnos como tu fuente confiable para todo lo relacionado con
          Arduino!
        </p>
        <p className="about-us__parrafo">
          ¡Construyamos juntos el futuro, un circuito a la vez!
        </p>
        
      </div>
      <div className="about-us__firma">
        <p className="about-us__firma-texto">ArduShop</p>
        </div>
    </section>
  );
};

export default Nosotros;
