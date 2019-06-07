export const types = {
  GETCOMMENTS: 'GETCOMMENTS',
}


export const getComments = () => ({
  type: types.GETCOMMENTS,
  api: `comments`,
});