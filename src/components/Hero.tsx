import React from "react";
import "./hero.css";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>
          <span className="highlight">Empowering You Through Technology</span>
          <br />
          For a Brighter Future In Tech
        </h1>

        <p>
          Welcome to <strong>MYGUYS Tech Solutions</strong> – unlocking possibilities and empowering tomorrow’s tech leaders.
        </p>

        <div className="hero-buttons">
          <Link to="/programs" className="btn-primary">
            OUR SERVICES <ArrowRight size={16} />
          </Link>
          <Link to="/about" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
