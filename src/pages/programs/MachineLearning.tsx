import React from "react";
import { motion } from "framer-motion";
import "./MachineLearning.css";
import Navbar from "@/components/Navbar";
import heroImg from "@/assets/machine-learning.jpg"; // Place a relevant ML/AI image here

const MachineLearning: React.FC = () => {
  return (
    <div className="ml-container">
      <Navbar />

      {/* Hero */}
      <motion.div
        className="ml-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="ml-hero-overlay"
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Machine Learning & AI</h1>
          <p>Build intelligent systems using modern machine learning techniques</p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="ml-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <h2>What You'll Learn</h2>

        <div className="ml-grid">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className="ml-card"
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
          className="ml-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <strong>Duration:</strong> 4–6 months | <strong>Level:</strong> Intermediate–Advanced
        </motion.p>

        <motion.button
          className="ml-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Building AI
        </motion.button>
      </motion.div>
    </div>
  );
};

const cardData = [
  { title: "Python for ML", desc: "Master NumPy, Pandas, and Scikit-learn" },
  { title: "Deep Learning", desc: "Build neural networks with TensorFlow & Keras" },
  { title: "NLP", desc: "Process text data and build chatbots using natural language understanding" },
  { title: "Real Projects", desc: "Train models and deploy real-world AI applications" },
];

export default MachineLearning;
