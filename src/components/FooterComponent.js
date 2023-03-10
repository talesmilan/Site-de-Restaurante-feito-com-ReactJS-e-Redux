import React from 'react';
import {Link} from 'react-router-dom'


function Footer(props) {
    return (
        <div className="footer mt-4">
            <div className="container">
                <div className="row justify-content-center">             
                    <div className="col-4 offset-1 col-sm-2">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Página Inicial</Link></li>
                            <li><Link to="/aboutus">Sobre</Link></li>
                            <li><Link to="/menu">Menu</Link></li>
                            <li><Link to="/contactus">Contato</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-5">
                        <h5>Nosso Endereço</h5>
                        <address>
                          Rua Mongeira Santos, Número: 1509<br />
                          Bairro: Catapituri, Cidade: São Paulo - SP<br />
                          Brasil<br />
                          
		              <i className="fa fa-phone fa-lg"></i>: +811 1234 5678<br />
		              <i className="fa fa-fax fa-lg"></i>: +811 8765 4321<br />
		              <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusao@comida.net">
                         confusao@comida.net</a>
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center mt-3">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">            
                <div className="col-auto mt-3">
                    <p>© Copyright 2018 Restaurante Confusão </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;