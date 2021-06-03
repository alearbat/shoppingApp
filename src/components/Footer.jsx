import React from 'react';
import logo from '../assets/plant-ar.jpg';
import '../css/footer.css';

const Footer = () => {

  return (
    <>
      <div className="container-fluid">
        <div className="footer row d-flex justify-content-center align-items-center">
          <img className="col-lg-2 col-md-2 col-sm-3 col-6"	src={logo} alt="Logotype plant-ar"/>
          <div className="d-flex justify-content-end align-items-center footer__sn--backg col-lg-6 col-md-5 col-sm-5 col-6">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className="redes"><i className="fab fa-twitter-square"></i></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="redes"><i className="fab fa-linkedin"></i></a>
          </div>
          <div className="d-flex justify-content-center footer__sn--backg col-lg-3 col-md-4 col-sm-4 col-10">
            <p className="footer__copyright">Plant-ar S.A. 2021 - Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </>	
  )
}

export default Footer;
