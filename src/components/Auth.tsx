import { useState } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./Auth.css";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      alert("Logging in...");
    } else {
      alert("Signing up and redirecting to payment...");
    }
  };

  return (
<div>
<Navbar/>
    <div className="auth-container">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input type="text" placeholder="Username" required />
        )}
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">{isLogin ? "Login" : "Sign Up & Activate"}</button>
      </form>
      <p onClick={toggleForm} className="toggle-link">
        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
      </p>
    </div>
    <Footer/> 
    </div>
    
  );
};

export default Auth;
