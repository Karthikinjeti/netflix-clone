import React, { useState } from "react";
import "./Nav.css";

function Nav({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    if (onSearch) {
      onSearch(value); // Real-time search in App.js
    }
  };

  return (
    <div className="nav">
      {/* Centered search input and signup button */}
      <div className="nav__center">
        <input
          type="text"
          className="nav__search"
          placeholder="Search movies, shows..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button className="nav__signup">Sign Up</button>
      </div>
    </div>
  );
}

export default Nav;
