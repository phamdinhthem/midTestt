const Banner = ({ movie }) => {
    return (
      <div className="banner">
        <img src={movie.image} alt={movie.movieName} className="banner-img" />
        <div className="banner-content">
          <h2>{movie.movieName}</h2>
          <p>{movie.description}</p>
        </div>
      </div>
    );
  };
  
  export default Banner;
  