const MovieCard = ({ movie, onSelect }) => {
    return (
      <div className="movie-card" onClick={() => onSelect(movie)}>
        <img src={movie.image} alt={movie.movieName} />
        <div className="movie-info">

          <div className="movie-overlay">
          <p>Episode {movie.episode}</p>
          
        </div>
        <div className="movie-info1"><h4>{movie.movieName}</h4></div>
        
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  