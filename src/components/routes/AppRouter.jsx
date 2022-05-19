import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../login/LoginScreen'
import { DashBoardRouts } from './DashBoardRouts'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/*' element={<DashBoardRouts />} />
      </Routes>
    </BrowserRouter>
  )
}
