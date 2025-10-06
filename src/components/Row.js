// src/components/Row.js
import React, { useState } from "react";
import YouTube from "react-youtube";
import "./Row.css";

function Row({ title, movies }) {
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl(""); // close trailer if already open
    } else if (movie.trailerUrl) {
      // Extract YouTube video ID from the URL
      const urlParams = new URLSearchParams(new URL(movie.trailerUrl).search);
      setTrailerUrl(urlParams.get("v"));
    } else {
      console.log("No trailer URL available for this movie");
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <div key={movie.id} className="row__posterContainer">
            <img
              onClick={() => handleClick(movie)}
              className="row__poster"
              src={movie.imageUrl}
              alt={movie.title}
            />
            <div className="row__title">{movie.title}</div>
          </div>
        ))}
      </div>

      {trailerUrl && (
        <YouTube
          videoId={trailerUrl}
          opts={{ height: "390", width: "100%", playerVars: { autoplay: 1 } }}
        />
      )}
    </div>
  );
}

export default Row;
