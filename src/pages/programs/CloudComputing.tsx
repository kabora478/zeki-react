import React from "react";
import { motion } from "framer-motion";
import "./Cloudcomputing.css";
import Navbar from "@/components/Navbar";
import heroImg from "@/assets/clouncomp.jpg"; // Add a cloud-themed image here

const CloudComputing: React.FC = () => {
  return (
    <div className="cloud-container">
      <Navbar />

      {/* Hero Section */}
      <motion.div
        className="cloud-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="cloud-hero-overlay"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Cloud Computing</h1>
          <p>Power scalable applications using AWS, Azure & GCP</p>
        </motion.div>
      </motion.div>

      {/* Content Section */}
      <motion.div
        className="cloud-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>What You’ll Learn</h2>

        <div className="cloud-grid">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="cloud-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
            >
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="cloud-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <strong>Duration:</strong> 3 months | <strong>Level:</strong> Intermediate–Advanced
        </motion.p>

        <motion.button
          className="cloud-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Learning Cloud
        </motion.button>
      </motion.div>
    </div>
  );
};

const cardData = [
  { title: "Cloud Platforms", desc: "Master AWS, Google Cloud Platform & Microsoft Azure" },
  { title: "Deployment", desc: "Deploy secure, scalable, and reliable backend systems" },
  { title: "DevOps & CI/CD", desc: "Automate infrastructure and pipelines for faster delivery" },
  { title: "Containers & Serverless", desc: "Work with Docker, Kubernetes, and serverless functions" },
];

export default CloudComputing;
