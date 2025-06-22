import { useState } from "react";
import { movies } from "./data/movies";
import Banner from "./components/Banner";
import MovieList from "./components/MovieList";
import "./App.css";  

function App() {
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Anonime</h1>
        <nav>
          <a href="#">Home</a>       
          <a href="#">List anime</a>
        </nav>
        <input type="text" placeholder="Search anime or movie" />
      </header>
      <main>
        <section className="explore">
          <h2>Explore</h2>
          <p>What are you gonna watch today ?</p>
          <Banner movie={selectedMovie} />
        </section>
        <section className="new-release">
          <h3>New Release</h3>
          <MovieList movies={movies} onSelect={handleSelectMovie} />
        </section>
      </main>
    </div>
  );
}

export default App;
