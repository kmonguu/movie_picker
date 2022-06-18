/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useGetMovies } from '../hooks/movie'

interface PosterProps {
  randomNumber: number
  value: any
}

function Poster({ randomNumber, value }: PosterProps) {
  const { movies } = useGetMovies()

  if (!movies) return <div>로딩중입니다...</div>

  return (
    <div css={wrapperCss}>
      <img src={movies[randomNumber]} alt="영화 포스터" />
      <p>{value}</p>
    </div>
  )
}

const wrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Poster
