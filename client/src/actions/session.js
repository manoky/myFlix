export const types = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT'
}


export const login = (email, password) => ({
  type: types.LOGIN,
  api: '/login',
  method: 'POST',
  data: {
    Email: email,
    Password: password
  }
});



export const logout = () => ({
  type: types.LOGOUT
});
