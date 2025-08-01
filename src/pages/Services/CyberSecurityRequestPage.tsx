import React from "react";
import "./CyberSecurityRequestPage.css"

const CyberSecurityRequestPage: React.FC = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">Cybersecurity Services</h1>
    <p className="text-gray-700 mb-6">
      Protect your digital assets with our expert cybersecurity services. We offer thorough assessments,
      penetration testing, and system hardening to ensure your business remains secure and compliant.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2">Basic Package</h2>
        <ul className="text-gray-600 list-disc list-inside">
          <li>Vulnerability Scan</li>
          <li>Security Report</li>
          <li>Basic Recommendations</li>
        </ul>
        <p className="mt-2 font-bold text-red-600">KES 3,000</p>
      </div>
      <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2">Standard Package</h2>
        <ul className="text-gray-600 list-disc list-inside">
          <li>Penetration Testing</li>
          <li>Detailed Security Audit</li>
          <li>Mid-level Threat Mitigation</li>
        </ul>
        <p className="mt-2 font-bold text-red-600">KES 6,000</p>
      </div>
      <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2">Premium Package</h2>
        <ul className="text-gray-600 list-disc list-inside">
          <li>Full Security Suite</li>
          <li>Incident Response Plan</li>
          <li>24/7 Monitoring Setup</li>
        </ul>
        <p className="mt-2 font-bold text-red-600">KES 12,000</p>
      </div>
    </div>

    <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl">
      Request Cybersecurity Service
    </button>
  </div>
);

export default CyberSecurityRequestPage;
