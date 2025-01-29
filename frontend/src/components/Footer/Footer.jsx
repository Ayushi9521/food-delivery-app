import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" className="logo" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            iste tempore minus commodi illum incidunt sit officia quam dolorem,
            nobis ullam veritatis magnam architecto non ab laborum quisquam
            perferendis nesciunt.
          </p>
          <div className="footer-social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter"></i>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91343759422</li>
            <li>conatct@fooddelivery.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copy-rigt">
        Copyright 2024@ greatstack.dev - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
