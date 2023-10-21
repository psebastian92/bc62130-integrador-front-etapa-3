import './Whatsapp.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Whatsapp = () => {
    return (
      <div className="whatsapp">
        <a href="https://web.whatsapp.com/" target="_blank" rel="">
          <FontAwesomeIcon icon={faWhatsapp} className='whatsapp__icon' />
        </a>
      </div>
    );
};

export default Whatsapp;
