import axios from 'axios'

export async function getMoviesAPI() {
  return (await axios.get('https://yts-proxy.nomadcoders1.now.sh/list_movies.json')).data
}
