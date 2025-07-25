import { useState } from "react";
import { Menu, X, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import "./navbar.css"; // ✅ Import custom CSS

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">
            <img src="/sph-logo.png" alt="Zekis Tech Logo" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/programs">Our Services</Link>
          <Link to="/departments">Departments</Link>
          <Link to="/impact">Impact</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/events" className="navbar-events-button">
            <Heart size={16} /> News
          </Link>
        </div>

        <button onClick={toggleMenu} className="nav-menu-button" aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>

          <div>
            <Link to="/programs" onClick={toggleMenu}>Our Services</Link>
            <div className="mobile-submenu">
              {/* <Link to="/programs/case-management" onClick={toggleMenu}>Case Management</Link> */}
              {/* <Link to="/programs/tourism-innovation-lab" onClick={toggleMenu}>Tourism Innovation Lab</Link> */}
              {/* <Link to="/programs/campus-ambassador" onClick={toggleMenu}>Campus Ambassador</Link> */}
              {/* <Link to="/programs/swahili-tech-women" onClick={toggleMenu}>Swahili Tech Women</Link> */}
            </div>
          </div>

          <div>
            <span>Departments</span>
            <div className="mobile-submenu">
              {/* <Link to="/department/communication" onClick={toggleMenu}>Communication</Link> */}
              {/* <Link to="/department/tech-engineering" onClick={toggleMenu}>Tech & Engineering</Link> */}
              {/* <Link to="/department/creatives" onClick={toggleMenu}>Creatives</Link> */}
              {/* <Link to="/department/community-entrepreneurship" onClick={toggleMenu}>Community & Entrepreneurship</Link> */}
            </div>
          </div>

          <Link to="/impact" onClick={toggleMenu}>Impact</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
          <Link to="/events" className="navbar-events-button" onClick={toggleMenu}>
            <Heart size={16} /> News
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
