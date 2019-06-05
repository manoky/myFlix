export const types = {
  SIGNUP: 'SIGNUP',
  LOGIN: 'LOGIN',
  SETUSER: 'SETUSER',
  LOGOUT: 'LOGOUT'
}


export const login = (email, password) => ({
  type: types.LOGIN,
  api: 'login',
  method: 'POST',
  data: {
    Email: email,
    Password: password
  }
});

export const signUp = (username,email, password) => ({
  type: types.SIGNUP,
  api: 'users',
  method: 'POST',
  data: {
    username: username,
    email: email,
    password: password
  }
});

export const setUser = ({user}) => ({
  type: types.SETUSER,
  user
});



export const logout = () => ({
  type: types.LOGOUT
});
