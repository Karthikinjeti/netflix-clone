import React from "react";
import "./Banner.css";

function Banner() {
  const backgroundImage = "https://i.pinimg.com/736x/75/53/3e/75533e434246787468c50e8fbde3a991.jpg";

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center center",
      }}
    >
      {/* Netflix logo top-left */}
   <img
  className="banner__logo"
  src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
  alt="Netflix Logo"
  
/>


      

      {/* Title and Play button */}
      <div className="banner__contents">
        <h1 className="banner__title">Kartheek's Web</h1>
        <button className="banner__button">Play</button>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
