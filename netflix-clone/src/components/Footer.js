import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
      <div className="footer__email">
        <input
          type="email"
          placeholder="Email address"
          className="footer__input"
        />
        <button className="footer__getStarted">Get Started</button>
      </div>

      <p>Questions? Call 000-800-919-1743</p>

      <div className="footer__links">
        <div className="footer__column">
          <button className="footer__link">FAQ</button>
          <button className="footer__link">Help Centre</button>
          <button className="footer__link">Account</button>
          <button className="footer__link">Media Centre</button>
        </div>
        <div className="footer__column">
          <button className="footer__link">Investor Relations</button>
          <button className="footer__link">Jobs</button>
          <button className="footer__link">Ways to Watch</button>
          <button className="footer__link">Terms of Use</button>
        </div>
        <div className="footer__column">
          <button className="footer__link">Privacy</button>
          <button className="footer__link">Cookie Preferences</button>
          <button className="footer__link">Corporate Information</button>
          <button className="footer__link">Contact Us</button>
        </div>
        <div className="footer__column">
          <button className="footer__link">Speed Test</button>
          <button className="footer__link">Legal Notices</button>
          <button className="footer__link">Only on Netflix</button>
        </div>
      </div>

      <p className="footer__copyright">
        © 1997-2025 Netflix, Inc.
      </p>
    </div>
  );
}

export default Footer;
