export const types = {
  GETCOMMENTS: 'GETCOMMENTS',
  POSTCOMMENTS: 'POSTCOMMENTS',
}


export const getComments = () => ({
  type: types.GETCOMMENTS,
  api: `comments`,
});

export const postComments = (
  userId,
  username,
  movie_id, 
  rating,
  comment_body
  ) => ({
  type: types.POSTCOMMENTS,
  api: 'comments',
  method: 'POST',
  data: {
    userId: userId,
    username: username,
    movieId: movie_id,
    rating: rating,
    comment: comment_body
  }
});