import { Link } from "react-router-dom";
import { Code, Shield, Brain, Palette, Users, Smartphone, Cloud, BarChart } from "lucide-react";
import "./Programs.css";

const programs = [
  {
    id: 1,
    title: "Web Development",
    description: "Learn full-stack web development from front-end to back-end.",
    icon: Code,
    link: "/programs/web-development"
  },
  {
    id: 2,
    title: "Cyber Security",
    description: "Understand digital threats and how to defend systems and data.",
    icon: Shield,
    link: "/programs/cyber-security"
  },
  {
    id: 3,
    title: "Machine Learning & AI",
    description: "Explore algorithms, data, and intelligent automation.",
    icon: Brain,
    link: "/programs/machine-learning"
  },
  {
    id: 4,
    title: "Graphic Design",
    description: "Master visual communication with modern design tools.",
    icon: Palette,
    link: "/programs/graphic-design"
  },
  {
    id: 5,
    title: "Mobile App Development",
    description: "Build native and hybrid apps for Android and iOS.",
    icon: Smartphone,
    link: "/programs/mobile-development"
  },
  {
    id: 6,
    title: "Cloud Computing",
    description: "Leverage the power of the cloud for scalable tech solutions.",
    icon: Cloud,
    link: "/programs/cloud"
  },
];

const specializedPrograms = [
  {
    id: 7,
    title: "UI/UX Design",
    description: "Learn how to design user-centered, intuitive digital interfaces.",
    icon: Palette,
    link: "/programs/ui-ux"
  },
  {
    id: 8,
    title: "Data Science",
    description: "Use data to generate insights, predictions, and decisions.",
    icon: BarChart,
    link: "/programs/data-science"
  },
  {
    id: 9,
    title: "Tech Mentorship",
    description: "Get matched with mentors in the tech industry for guidance.",
    icon: Users,
    link: "/programs/mentorship"
  }
];

const Programs = () => {
  return (
    <section className="programs-section">
      <div className="programs-container">
        <div className="programs-header">
          <h2>Our <span className="highlight">Programs</span></h2>
          <p>Explore specialized programs designed to develop tech talent and innovation.</p>
        </div>

        <div className="programs-grid">
          {programs.map((program) => (
            <div className="program-card" key={program.id}>
              <div className="program-icon">
                <program.icon size={28} />
              </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <Link to={program.link} className="program-link">Learn More →</Link>
            </div>
          ))}
        </div>

        <h3 className="specialized-title">Specialized Programs</h3>

        <div className="programs-grid">
          {specializedPrograms.map((program) => (
            <div className="program-card" key={program.id}>
              <div className="program-icon">
                <program.icon size={28} />
              </div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <Link to={program.link} className="program-link">Learn More →</Link>
            </div>
          ))}
        </div>

        <div className="view-all">
          <Link to="/programs" className="view-all-btn">View All Programs</Link>
        </div>
      </div>
    </section>
  );
};

export default Programs;
