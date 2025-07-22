import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-heading">
              <span className="text-gradient">About</span> Zekis Tech Solutions
            </h2>

            <p className="about-paragraph">
              Zeki Tech Solutions is a forward-thinking technology company committed
              to delivering innovative digital solutions tailored to meet the evolving
              needs of individuals, businesses, and organizations. With a strong focus
              on excellence and creativity, we specialize in web development,
              cybersecurity, graphic design, and IT consultancy.
            </p>

            <p className="about-paragraph">
              Our mission is to empower individuals and businesses by providing innovative,
              reliable, and secure technology solutions that drive digital transformation.
            </p>

            <div className="about-boxes">
              <div className="about-box">
                <h3 className="about-box-title">Our Mission</h3>
                <p className="about-box-desc">To empower youth through innovation and creativity</p>
              </div>
              <div className="about-box">
                <h3 className="about-box-title">Our Vision</h3>
                <p className="about-box-desc">A community of empowered youth driving positive change</p>
              </div>
            </div>

            <Button className="btn-primary" asChild>
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>

          <div className="about-image-wrapper">
            <div className="about-image">
              <img
                src="/img/tech.jpg"
                alt="Youth collaboration at Zekis"
              />
            </div>
            <div className="bg-shape shape-one"></div>
            <div className="bg-shape shape-two"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
