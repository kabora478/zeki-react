import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <Link to="/" className="footer-logo">
            <img src="/sph-logo.png" alt="Zekis Tech Logo" width={180} />
          </Link>
          <p>
            Empowering youth through technology, arts, and entrepreneurship across East Africa.
          </p>
          <div className="footer-socials">
            <a href="https://facebook.com/zekisfoundation" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </a>
            <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
              <FaXTwitter />
            </a>
            <a href="https://www.instagram.com/khenkabora/" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/zeki/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.youtube.com/@Emmanuel-b3h" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li><Link to="/programs">Website Development</Link></li>
            <li><Link to="/programs">Artifitial Inteligence</Link></li>
            <li><Link to="/programs">Mobile Development</Link></li>
            <li><Link to="/programs">Cyber Security</Link></li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/impact">Our Impact</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>
          <address>
            <p>Online Services</p>
            <p>Mombasa, Kenya</p>
            <p>info@zekistech.co.ke</p>
            <p>+254 114867106</p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Zekis Tech Solutions. All rights reserved.</p>
        <div className="footer-policy">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
