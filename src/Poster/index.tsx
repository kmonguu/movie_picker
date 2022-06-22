/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useGetMovies } from '../hooks/movie'
import { jsonLocalStorage } from '../lib/storage'

interface PosterProps {
  randomNumber: number
}

function Poster({ randomNumber }: PosterProps) {
  const { movies } = useGetMovies()
  // const [favorit, setFavorit] = useState([])
  // const [mainPoster, setMainPoster] = useState(<img src={movies[0]} />)

  // const handleFavoritButton = () => {
  //   const nextFavorites = [...favorit, mainPoster]
  //   setFavorit(nextFavorites)
  //   jsonLocalStorage.setItem('favorit', nextFavorites)
  // }

  const movieTitle = jsonLocalStorage.getItem('movie-title')

  if (!movies) return <div>로딩중입니다...</div>

  return (
    <div css={wrapperCss}>
      <img src={movies[randomNumber]} alt="영화 포스터" />
      <p>{movieTitle}</p>

      {/* <ul>
        {favorit.map((movie) => (
          <li>
            <img src={movies[randomNumber]} key={movie} />
          </li>
        ))}
      </ul> */}
    </div>
  )
}

const wrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Poster
