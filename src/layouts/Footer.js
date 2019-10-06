import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import './../assets/styles/footer.css';

class Footer extends Component {
  render(){
    return (
		<footer>
			<div className="container text-center">
				<div className="row">
					<div className="col-sm-12">
						<FontAwesomeIcon icon={faFacebook} className="fontawesome-icon" size="lg"/>
						<FontAwesomeIcon icon={faGoogle} className="fontawesome-icon" size="lg"/>
						<FontAwesomeIcon icon={faLinkedin} className="fontawesome-icon" size="lg"/>
						<FontAwesomeIcon icon={faTwitter} className="fontawesome-icon" size="lg"/>
						<FontAwesomeIcon icon={faWhatsapp} className="fontawesome-icon" size="lg"/>
					</div>
				</div>
				<hr/>
				<div className="row">
					<div className="col-sm-12 copyright">
						<span>&copy;2019 <strong>Proxy Service</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;All rights reserved</span>
					</div>
				</div>
			</div>
		</footer>
    );
  }
}

export default Footer;