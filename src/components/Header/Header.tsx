import React, { useState } from "react";
import logo from "../../images/logo.png";
import Telephone from "../../assets/telephone.svg";
import Mail from "../../assets/mail.svg";
import MobileNav from "../MobileNav/MobileNav";
import { Link } from "gatsby";

import "./Header.scss";

interface Props {
  path: string;
}

const Header: React.FC<Props> = ({ path }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={logo} alt="logo" />
        <p>
          Safeline <span>Electricals</span>
        </p>
      </Link>
      <MobileNav isOpen={isOpen} path={path} setOpen={setOpen} />
      <div className="info">
        <div className="telephone">
          <Telephone />
          <p>(022)27401956/8425846364</p>
        </div>
        <div className="mail">
          <Mail />
          <p>safelineelectricals@gmail.com</p>
        </div>
      </div>
    </div>
  );
};
export default Header;
