import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Heart, Target, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import "./AboutPage.css";

const values = [
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of community collaboration and support.",
  },
  {
    icon: Heart,
    title: "Empowerment",
    description: "We strive to give youth the tools and confidence to succeed.",
  },
  {
    icon: Target,
    title: "Innovation",
    description: "We encourage creative solutions to local and global challenges.",
  },
  {
    icon: Clock,
    title: "Sustainability",
    description: "We focus on long-term impact and sustainable development.",
  },
];

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className="about-hero">
          <div className="about-hero-content">
            <h1>
              About <span className="text-gradient">Zekis Tech Solutions</span>
            </h1>
            <p>Our mission is to help the community grow through technology and innovation.</p>
          </div>
        </section>

        <section className="about-story">
          <div className="story-container">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Zekis Tech Solutions is a technology-focused organization committed to empowering
                youth and businesses through software, cybersecurity, and digital innovation.
              </p>
              <p>
                Founded with the mission to provide smart, secure, and user-friendly digital
                solutions, Zekis has grown to become a trusted partner in tech capacity building,
                mentorship, and sustainable impact.
              </p>
              <p>
                From local startups to global NGOs, we offer custom tools and scalable infrastructure
                to help communities thrive in the digital era.
              </p>
            </div>
            <div className="story-video">
              <div className="video-container">
                <iframe
                  src="https://www.youtube.com/embed/bscypssE8Ms"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Zekis Documentary"
                ></iframe>
                <button
                  onClick={() =>
                    window.open("https://www.youtube.com/watch?v=bscypssE8Ms", "_blank")
                  }
                >
                  Play Documentary
                </button>
              </div>
              <div className="shape-overlay"></div>
            </div>
          </div>
        </section>

        <section className="about-values">
          <div className="values-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide our work and impact at Zekis Tech Solutions.</p>
          </div>

          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="icon-wrapper">
                  <value.icon className="icon" />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <div className="cta-container">
            <h2>Join Our Mission</h2>
            <p>
              Whether you're a youth looking to grow, a mentor ready to guide, or a donor seeking
              impact — we welcome you.
            </p>
            <div className="cta-buttons">
              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSe8xVQEK2VP89CYE4166i6Vr6iriaA1x1D5ecVBCVY5MuqP3g/viewform?usp=dialog"
                target="_blank"
              >
                <Button className="btn-primary">Join the Youth Database</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
