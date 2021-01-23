import { Link } from "gatsby";
import React, { useState } from "react";
import logo from "../../images/logo.png";

import "./Footer.scss";

interface Props {}
const Footer: React.FC<Props> = ({}) => {
  return (
    <div className="footer">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <p>Safeline Electricals</p>
      </Link>
      <div className="title">A Grade Government Registered & Licensed Electrical Contractor</div>
      <div className="main">
        <div className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/clients">Our clients</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/contacts">Contact Us</Link>
        </div>
        <div className="details">
          <p>Contact Us</p>
          <div className="address">
            SAFELINE ELECTRICALS Plot No.ISP -10, Opp.Sanghi Orgn., Near Petrol Pump, MIDC Taloja Industrial Area, Navi Mumbai - 410208 Maharashtra, India
          </div>
          <div className="phone">Phone : (022) 27401956 / 8425846364 </div>
          <div className="email"> Email: safelineelectricals@gmail.com</div>
        </div>
      </div>
      <div className="copyright">Copyright © 2021 by Safeline Electricals</div>
    </div>
  );
};
export default Footer;
