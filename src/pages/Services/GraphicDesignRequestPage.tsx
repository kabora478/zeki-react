import React from "react";
import Navbar from "@/components/Navbar";
import "./GraphicDesignRequestPage.css"

const GraphicDesignRequestPage: React.FC = () => (
  <div className="p-6 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-4">Graphic Design Services</h1>
    <p className="text-gray-700 mb-6">
      Our creative team delivers professional and visually stunning designs tailored for your brand.
      Whether you need a logo, business card, banner, or full branding kit, we’ve got you covered.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2">Basic Package</h2>
        <ul className="text-gray-600 list-disc list-inside">
          <li>1 Logo Design</li>
          <li>2 Revisions</li>
          <li>Delivery in 3 Days</li>
        </ul>
        <p className="mt-2 font-bold text-blue-600">KES 1,000</p>
      </div>
      <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2">Standard Package</h2>
        <ul className="text-gray-600 list-disc list-inside">
          <li>Logo + Business Card + Banner</li>
          <li>4 Revisions</li>
          <li>Delivery in 4 Days</li>
        </ul>
        <p className="mt-2 font-bold text-blue-600">KES 2,500</p>
      </div>
      <div className="border rounded-2xl p-4 shadow hover:shadow-lg transition">
        <h2 className="text-xl font-semibold mb-2">Premium Package</h2>
        <ul className="text-gray-600 list-disc list-inside">
          <li>Full Brand Kit (Logo, Card, Poster, Mockups)</li>
          <li>Unlimited Revisions</li>
          <li>Priority Support</li>
        </ul>
        <p className="mt-2 font-bold text-blue-600">KES 4,500</p>
      </div>
    </div>

    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
      Request Graphic Design
    </button>
  </div>
);

export default GraphicDesignRequestPage;
