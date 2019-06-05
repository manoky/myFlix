export const types = {
  GETFAVORITES: 'GETFAVORITES',
  FAVORITE: 'FAVORITE',
  UNFAVORITE: 'UNFAVORITE',
  RESETFAVORITES: 'RESETFAVORITES'
}



export const getFavorite = (userId) => ({
  type: types.GETFAVORITES,
  api: `users/${userId}/favorites`,
});

export const onFavorite = (userId, movieId) => ({
  type: types.FAVORITE,
  api: `users/${userId}/movies/${movieId}`,
  method:'POST'
});

export const unFavorite = (userId, movieId) => ({
  type: types.UNFAVORITE,
  api: `users/${userId}/movies/${movieId}`,
  method: 'DELETE'
});

export const resetFavorite = () => ({
  type: types.RESETFAVORITES,
});