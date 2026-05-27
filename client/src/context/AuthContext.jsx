import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react'

import api from '../services/api'

const AuthContext = createContext()

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const token = localStorage.getItem('token')
    const userStorage = localStorage.getItem('user')

    if (token && userStorage) {
      api.defaults.headers.Authorization = `Bearer ${token}`

      setUser(JSON.parse(userStorage))
    }

    setLoading(false)

  }, [])

  async function login(email, password) {

  try {

    const response =
      await api.post('/auth/login', {
        email,
        password
      })

    const {
      token,
      user
    } = response.data

    localStorage.setItem(
      'token',
      token
    )

    localStorage.setItem(
      'user',
      JSON.stringify(user)
    )

    api.defaults.headers.Authorization =
      `Bearer ${token}`

    setUser(user)

    return true

  } catch (error) {

    console.log(error)

    return false
  }
}

  async function register(name, email, password) {

  try {

    await api.post('/auth/register', {
      name,
      email,
      password
    })

    const loginResponse =
      await api.post('/auth/login', {
        email,
        password
      })

    const {
      token,
      user
    } = loginResponse.data

    localStorage.setItem(
      'token',
      token
    )

    localStorage.setItem(
      'user',
      JSON.stringify(user)
    )

    api.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${token}`

    setUser(user)

    return true

  } catch (error) {

    console.log(error)

    return false
  }
}

  function logout() {

    localStorage.removeItem('token')
    localStorage.removeItem('user')

    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
  authenticated: !!user,
  user,
  login,
  register,
  logout,
  loading
}}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}