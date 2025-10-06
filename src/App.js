import React, { useState } from "react";
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Footer from "./components/Footer"; 

// Import movie lists
import netflixOriginals from "./data/netflixOriginals";
import trendingMovies from "./data/trendingMovies";
import topRatedMovies from "./data/topRatedMovies";
import actionMovies from "./data/actionMovies";
import comedyMovies from "./data/comedyMovies";
import horrorMovies from "./data/horrorMovies";
import animeMovies from "./data/animeMovies";
import documentaries from "./data/documentaries";

import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter function
  const filterMovies = (movies) =>
    movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="app">
      <Nav onSearch={setSearchQuery} />
      <Banner />

      <Row title="Netflix Originals" movies={filterMovies(netflixOriginals)} />
      <Row title="Trending Now" movies={filterMovies(trendingMovies)} />
      <Row title="Top Rated" movies={filterMovies(topRatedMovies)} />
      <Row title="Action Movies" movies={filterMovies(actionMovies)} />
      <Row title="Comedy Movies" movies={filterMovies(comedyMovies)} />
      <Row title="Horror Movies" movies={filterMovies(horrorMovies)} />
      <Row title="Anime Movies" movies={filterMovies(animeMovies)} />
      <Row title="Documentaries" movies={filterMovies(documentaries)} />
      <Footer />
    </div>
  );
}

export default App;
