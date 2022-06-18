import { useQuery } from 'react-query'
import { getMoviesAPI } from '../api/movie'

export function useGetMovies() {
  const { data, isLoading } = useQuery('movie-info', getMoviesAPI, {
    select: (data: any) => data.data.movies.map(({ medium_cover_image }: any) => medium_cover_image),
  })

  return { movies: data, moviesLoading: isLoading }
}
