import React from "react";
import { Link } from "react-router-dom";
import './FrontPage.css';

const FrontPage = () => {
  return (
    <div className="frontpage-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <h1>TRADES&CO.</h1>
        </div>
        <div className="navbar-links">
          <Link className="navbar-link" to="https://tradescoanant.us.auth0.com/u/login?state=hKFo2SB5bjlpWVl3UlFnSmcxczFSZGZFb000SkhENmUtaS1xY6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGxpTk5XVERHMWJ6b083Y0JIVFljLVlXNnMtWVlMVXVxo2NpZNkgSkVYaGFtTHZOVm1HUm1ZOGN3djFzOTFVRzUzVXp5OVU">Login</Link>
         <Link className="navbar-link signup" to="https://tradescoanant.us.auth0.com/u/signup/Username-Password-Authentication?state=hKFo2SB5bjlpWVl3UlFnSmcxczFSZGZFb000SkhENmUtaS1xY6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGxpTk5XVERHMWJ6b083Y0JIVFljLVlXNnMtWVlMVXVxo2NpZNkgSkVYaGFtTHZOVm1HUm1ZOGN3djFzOTFVRzUzVXp5OVU">Sign Up</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h2 className="tsw">Trade Smarter with TRADES&CO.</h2>
          <p>Experience risk-free stock trading with live market data.</p>
          <p><i>Created by Anant Prakash.</i></p>
          <Link to="/signup" className="cta-button">Get Started ↗</Link>
        </div>
      </header>

      {/* What is TRADES&CO.? Section */}
      <section className="intro-section">
        <h2>What is TRADES&CO.?</h2>
        <p>
          TRADES&CO. is the ultimate paper trading platform where you can practice your trading skills with real-time data, all without any financial risk. Perfect for beginners and pros alike.
        </p>
        <p>Created by Anant Prakash</p>
        <Link to="https://tradescoanant.us.auth0.com/u/signup/Username-Password-Authentication?state=hKFo2SB5bjlpWVl3UlFnSmcxczFSZGZFb000SkhENmUtaS1xY6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIGxpTk5XVERHMWJ6b083Y0JIVFljLVlXNnMtWVlMVXVxo2NpZNkgSkVYaGFtTHZOVm1HUm1ZOGN3djFzOTFVRzUzVXp5OVU" className="cta-button">Join the Community</Link>
      </section>

      {/* How Tradeloop Works Section */}
      <section className="how-it-works-section">
        <h2>How TRADES&CO. Works</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Create Your Account</h3>
            <p>Sign up and get access to real-time stock data, charts, and features.</p>
          </div>
          <div className="step">
            <h3>2. Start Trading</h3>
            <p>Use simulated funds to trade and test your strategies with no risk.</p>
          </div>
          <div className="step">
            <h3>3. Learn & Improve</h3>
            <p>Track your performance and analyze your trades to level up your skills.</p>
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"TRADES&CO. has been a game-changer for me!  I can practice my strategies without the fear of losing real money." - Shashi.</p>
          </div>
          <div className="testimonial">
            <p>"The real-time market data is spot on! I feel much more confident in my trades now." - Aashish.</p>
          </div>
          <div className="testimonial">
            <p>"TRADES&CO. helped me build a solid foundation in stock trading. Highly recommend it!" - Abhash.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose TRADES&CO.?</h2>
        <div className="feature-cards">
          <div className="card">
            <h3>Real-Time Stock Data</h3>
            <p>Track live market data and simulate trades using real stock prices.</p>
          </div>
          <div className="card">
            <h3>Zero-Risk Trading</h3>
            <p>Practice trading with no financial risk. Learn, grow, and improve.</p>
          </div>
          <div className="card">
            <h3>Advanced Analytics</h3>
            <p>Analyze your trades, track your performance, and gain insights to level up your skills.</p>
          </div>
        </div>
      
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 TRADES&CO. All rights reserved |  &copy; 2025 ANANT&CO.</p>
      </footer>
    </div>
  );
};

export default FrontPage;
