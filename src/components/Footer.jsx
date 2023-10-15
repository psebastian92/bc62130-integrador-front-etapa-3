import './Footer.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="foot">
      {" "}
      {/* */}
      <div className="foot__shop">
        <div className="foot__shop-title">ArduShop</div>
        <div className="foot__shop-content">
          Copyright © 2020-2023 ArduShop S.R.L.
        </div>
      </div>
      <div className="foot__contact">
        <div className="foot__contact-title">Contacto</div>
        <div className="foot__contact-content">+54-11-xxxx-xxxx</div>
      </div>
      <div className="foot__followus">
        <div className="foot__followus-title">Seguinos</div>
        <div className="foot__followus-content">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
        </div>
      </div>
    </footer> /* */
  );
};

export default Footer;
