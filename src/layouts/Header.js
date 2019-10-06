import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './../assets/styles/header.css';

class Header extends Component {
  render(){
    return (
      <header>
      	<div className="container">
	      	<div className="row">
		      	<div className="col-sm-2 logo">
					<Link to="/">
						Proxy Service
					</Link>
		        </div>
		        <div className="offset-sm-2 col-sm-8 navbar">
		        	<Link to="/" className="nav-link">Home</Link>
		        	<Link to="/membership" className="nav-link">Membership</Link>
		        	<Link to="/profile" className="nav-link">Profile</Link>
		        	<Link to="/help" className="nav-link">Help</Link>
		        	<Link to="/login" className="nav-link btn btn-warning btn-login">Log In</Link>
		        </div>
		    </div>
		</div>
      </header>
    );
  }
}

export default Header;