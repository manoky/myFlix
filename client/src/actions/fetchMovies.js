export const types = {
  FETCH_MOVIES: 'FETCH_MOVIES',
}


const fetchMovies = () => ({
  type: types.FETCH_MOVIES,
  api: 'movies',
});

export default fetchMovies;