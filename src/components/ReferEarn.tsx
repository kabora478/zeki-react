import React from 'react';
import './ReferEarn.css';
import heroImage from '@/assets/refer.jpg'; // Replace with your image path
import { useNavigate } from 'react-router-dom';

const ReferEarn: React.FC = () => {
  const navigate = useNavigate();         

  const handleStartEarning = () => {
    navigate('/auth'); // You can later split this into /signup and /login
  };

  const handleLearnMore = () => {
    alert('You will earn once your referral signs up and activates their account.');
  };

  return (
    <div className="refer-container">
      <div className="refer-left">
        <h1>
          Earn Money by Referring <br />
          Your Friends and customers to Us!
        </h1>
        <p>Get rewarded when someone joins and activates their account as sales agent.</p>
        <div className="refer-buttons">
          <button className="btn-primary" onClick={handleStartEarning}>
            Start Earning
          </button>
          <button className="btn-secondary" onClick={handleLearnMore}>
            Learn More
          </button>
        </div>
      </div>
      <div className="refer-right">
        <img src={heroImage} alt="Refer and Earn" />
      </div>
    </div>
  );
};

export default ReferEarn;
