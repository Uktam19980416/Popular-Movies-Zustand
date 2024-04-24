import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import MovieDetailsInfo from './MovieDetailsInfo'

const apiService = axios.create({ baseURL: 'https://api.themoviedb.org/3/' })

const API_KEY = '971dafc1ff996fa4ec6a4117c349f687'

const MovieDetails = () => {
  const { id } = useParams()
  const [movieDetails, setMovieDetails] = useState({})

  const { isLoading, error, data } = useQuery(
    ['movieDetails', id],
    async () => {
      try {
        const response = await apiService.get(`movie/${id}`, {
          params: { api_key: API_KEY },
        })
        return response.data
      } catch (error) {
        console.error('Error fetching movie details', error)
        throw new Error('Failed to fetch movie details')
      }
    }
  )

  useEffect(() => {
    if (data) {
      setMovieDetails(data)
    }
  }, [data])

  if (isLoading) {
    return (
      <div>
        <h2 className="popular--theme">Movie Details</h2>
        <p className="popular--theme">Loading movie details...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div>
        <h2 className="popular--theme">Movie Details</h2>
        <p className="movie--details--error">
          Error fetching movie details: {error.message}
        </p>
      </div>
    )
  }

  return (
    <div>
      <MovieDetailsInfo movieDetails={movieDetails} />
    </div>
  )
}

export default MovieDetails
