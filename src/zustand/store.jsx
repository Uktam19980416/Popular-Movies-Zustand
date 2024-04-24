import { create } from 'zustand'

const useMovieDetailsStore = create((set) => ({
  movieDetails: {},
  isLoading: false,
  error: null,
  query: '',
  searchQuery: (newQuery) => set({ query: newQuery }),
}))

export default useMovieDetailsStore
