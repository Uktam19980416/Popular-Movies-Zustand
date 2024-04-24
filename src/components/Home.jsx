import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import useMovieDetailsStore from '../zustand/store'

const POPULAR_MOVIES_URL =
  'https://api.themoviedb.org/3/movie/popular?api_key=971dafc1ff996fa4ec6a4117c349f687'

const Home = () => {
  const [movies, setMovies] = useState([])
  const { query } = useMovieDetailsStore()

  const { isLoading, error, data } = useQuery('popularMovies', async () => {
    const response = await fetch(POPULAR_MOVIES_URL)
    if (!response.ok) {
      throw new Error('Failed to fetch popular movies')
    }
    return await response.json()
  })

  useEffect(() => {
    if (data) {
      setMovies(data.results)
    }
  }, [data])

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  )

  if (isLoading) {
    return (
      <div>
        <h2 className="popular--theme">Popular Movies</h2>
        <p className="popular--theme">Loading movies...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h2 className="popular--theme">Popular Movies</h2>
        <p className="movie--details--error">
          Error fetching movies: {error.message}
        </p>
      </div>
    )
  }

  return (
    <div>
      <h2 className="popular--theme">Popular Movies</h2>
      <ul className="grid">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <li key={movie.id} className="poster--image--parent">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  className="popular--image"
                  alt={movie.title}
                />
                <p className="movie--title">
                  {movie.title}
                  {movie.release_date && ` (${movie.release_date.slice(0, 4)})`}
                </p>
              </Link>
            </li>
          ))
        ) : (
          <p className="searched--movies--no--found">No movies found 🙅‍♂️</p>
        )}
      </ul>
    </div>
  )
}

export default Home
