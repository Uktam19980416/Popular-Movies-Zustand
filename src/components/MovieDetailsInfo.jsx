import PropTypes from 'prop-types'
function MovieDetailsInfo({ movieDetails }) {
  const {
    title,
    overview,
    poster_path,
    genres,
    release_date,
    runtime,
    vote_average,
    vote_count,
    popularity,
    status,
    tagline,
    budget,
    revenue,
    spoken_languages,
  } = movieDetails

  return (
    <div>
      <h2 className="popular--theme">{title}</h2>
      <div className="movies--details">
        <img
          className="movie--details--image"
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
        />
        <div className="movies--details--main">
          <h2 className="movies--details--overview-title">Movie Details:</h2>
          <div className="movies--details--main">
            <p className="movies--details--overview">{overview}</p>
            <div className="movie--details--genres">
              <h4 className="genres--title">Genres:</h4>
              {genres?.map((genre) => (
                <span key={genre.id} className="movies--details--genre">
                  {genre.name}
                </span>
              ))}
            </div>
            <div className="genres--details--flex">
              <h4 className="genres--title">Release Date:</h4>
              <span className="movies--details--text">{release_date}</span>
            </div>

            <div className="genres--details--flex">
              <h4 className="genres--title">Runtime:</h4>
              <span className="movies--details--text">{runtime} minutes</span>
            </div>

            <div className="genres--details--flex">
              <h4 className="genres--title">Vote Average:</h4>
              <span className="movies--details--text">
                {vote_average && vote_average.toFixed(1)}
              </span>
            </div>

            <div className="genres--details--flex">
              <h4 className="genres--title">Vote Count:</h4>
              <span className="movies--details--text">{vote_count}</span>
            </div>

            <div className="genres--details--flex">
              <h4 className="genres--title">Popularity:</h4>
              <span className="movies--details--text">{popularity}</span>
            </div>

            <div className="genres--details--flex">
              <h4 className="genres--title">Status:</h4>
              <span className="movies--details--text">{status}</span>
            </div>

            <div className="genres--details--flex">
              <h4 className="genres--title">Tagline:</h4>
              <span className="movies--details--text">{tagline || 'N/A'}</span>
            </div>

            <div className="genres--details--flex">
              <h4 className="genres--title">Budget:</h4>
              <span className="movies--details--text">
                ${budget?.toLocaleString()}
              </span>
            </div>

            <div className="genres--details--flex">
              <h4 className="genres--title">Revenue:</h4>
              <span className="movies--details--text">
                ${revenue?.toLocaleString()}
              </span>
            </div>

            <div className="genres--details--flex">
              <h4 className="genres--title">Language:</h4>
              <span className="movies--details--text">
                {spoken_languages && spoken_languages[0]?.english_name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

MovieDetailsInfo.propTypes = {
  movieDetails: PropTypes.shape({
    spoken_languages: PropTypes.array,
    revenue: PropTypes.number,
    budget: PropTypes.number,
    tagline: PropTypes.string,
    status: PropTypes.string,
    popularity: PropTypes.number,
    vote_count: PropTypes.number,
    vote_average: PropTypes.number,
    runtime: PropTypes.number,
    release_date: PropTypes.string,
    genres: PropTypes.array,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
}

export default MovieDetailsInfo
