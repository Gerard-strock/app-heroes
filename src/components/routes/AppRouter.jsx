import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../login/LoginScreen'
import { DashBoardRouts } from './DashBoardRouts'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/login'
          element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
          }
        />

        <Route
          path='/*'
          element={
            <PrivateRoute>
              <DashBoardRouts />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
