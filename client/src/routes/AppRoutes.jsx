import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import CourseDetails from '../pages/CourseDetails'
import Admin from '../pages/Admin'
import ForgotPassword from '../pages/ForgotPassword'

import ProtectedRoute from './ProtectedRoute'

function AppRoutes() {

  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />
        <Route
  path="/forgot-password"
  element={<ForgotPassword />}
/>

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

          <Route
          path="/courses/:id"
          element={
            <ProtectedRoute>
              <CourseDetails />
            </ProtectedRoute>
          }
        />
      <Route
  path="/admin"
  element={
    <ProtectedRoute>
      <Admin />
    </ProtectedRoute>
  }
/>

      </Routes>

    </BrowserRouter>
  )
}

export default AppRoutes