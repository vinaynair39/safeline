import React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.png";

import styles from "./Footer.module.scss";

interface Props {}
const Footer: React.FC<Props> = ({}) => {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          <img src={logo} alt="logo" />
          <p>Safeline Electricals</p>
        </Link>
        <div className={styles.title}>
          A Grade Government Registered & Licensed Electrical Contractor. Safeline Also Undertakes all types of civil and mechanical works.
        </div>
        <div className={styles.copyright}>Copyright © 2021 by Safeline Electricals</div>
      </div>
      <div className={styles.right}>
        <div className={styles.main}>
          <div className={styles.navlinks}>
            <Link to="/">Home</Link>
            <Link to="#welcomeInfo">About Us</Link>
            <Link to="#services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/clients">Our clients</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contacts">Contact Us</Link>
            <Link to="/blogs">Blogs</Link>

          </div>
          <div className={styles.details}>
            <p>Contact Us</p>
            <div className={styles.address}>SAFELINE ELECTRICALS</div>
            <div className={styles.address} style={{ paddingTop: "0" }}>
              Plot No.ISP -10, Opp.Sanghi Orgn., Near Petrol Pump, MIDC Taloja Industrial Area, Navi Mumbai - 410208 Maharashtra, India
            </div>
            <div className={styles.phone}>Phone : (022) 27401956 / 8425846364 </div>
            <div className={styles.email}> Email: safelineelectricals@gmail.com</div>
            <div className={styles.places}>
              Mumbai, Navi Mumbai, industrial, industries, thane, pune, nashik, aurangabad, ratnagiri, nagpur, ahmednagar, akola, amravati, chandrapur, dhule,
              jalgaon, raigad, sangli, satara, belgaum, kolhapur, belgaon, Taloja, panvel, kamothe, maharashtra.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobileCopyright}>Copyright © 2021 by Safeline Electricals</div>
    </div>
  );
};
export default Footer;
