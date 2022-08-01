import React from "react";
import logo from "../../assets/images/footcommerce-logo.svg";
// import { Link } from "react-router-dom";
// import FacebookIcon from "../../assets/images/icons8-facebook-150.svg";
// import InstagramIcon from "../../assets/images/icons8-instagram-150.svg";

const Footer = () => {
  return (
    <div>
      <div class="footerlogo">
        <img src={logo} />
      </div>

      <footer className="footer">
        <p class="footer-text">
          Premium Quality footwear at the best and most affordable price.
          <br /> we have a new offer every day for 365 days{" "}
        </p>
        <h5 class="contact">Contact</h5>
        <p>Email :hello@footcommerce.com | Hotline: +1 131 138 138</p>
      </footer>
    </div>
  );
};

export default Footer;
