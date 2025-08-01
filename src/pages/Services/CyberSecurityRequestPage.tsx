import React from "react";
import { motion } from "framer-motion";
import "./CyberSecurityRequestPage.css";

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

import heroImg from "/src/assets/cybersecurity.jpg";
import ReferEarn from "@/components/ReferEarn";

const CyberSecurityRequestPage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      {/* Hero Section */}
      <motion.div
        className="cyber-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="cyber-hero-overlay"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1>Cybersecurity Services</h1>
          <p>Dive into the world of digital defense and ethical hacking</p>
        </motion.div>
      </motion.div>

      {/* Service Packages Section */}
      <div className="p-6 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Our Packages</h2>
        <p className="text-gray-700 mb-6">
          Protect your digital assets with our expert cybersecurity services. We offer thorough assessments,
          penetration testing, and system hardening to ensure your business remains secure and compliant.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Basic Package */}
          <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Basic Package</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Vulnerability Scan</li>
              <li>Security Report</li>
              <li>Basic Recommendations</li>
            </ul>
            <p className="mt-2 font-bold text-red-600">KES 3,000</p>
          </div>

          {/* Standard Package */}
          <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Standard Package</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Penetration Testing</li>
              <li>Detailed Security Audit</li>
              <li>Mid-level Threat Mitigation</li>
            </ul>
            <p className="mt-2 font-bold text-red-600">KES 6,000</p>
          </div>

          {/* Premium Package */}
          <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Premium Package</h3>
            <ul className="text-gray-600 list-disc list-inside">
              <li>Full Security Suite</li>
              <li>Incident Response Plan</li>
              <li>24/7 Monitoring Setup</li>
            </ul>
            <p className="mt-2 font-bold text-red-600">KES 12,000</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-10">
          <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl transition">
            Request Cybersecurity Service
          </button>
        </div>
      </div>
      <ReferEarn/>
      <Footer/>
    </div>
  );
};

export default CyberSecurityRequestPage;
