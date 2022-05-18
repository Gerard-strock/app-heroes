import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DcScreen } from '../dc/DcScreen'
import { LoginScreen } from '../login/LoginScreen'
import { MarvelScreen } from '../marvel/MarvelScreen'
import { SearchScreen } from '../search/SearchScreen'
import { Navbar } from '../ui/Navbar'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<MarvelScreen />} />
        <Route path='/marvel' element={<MarvelScreen />} />
        <Route path='/dc' element={<DcScreen />} />
        <Route path='/search' element={<SearchScreen />} />
        <Route path='/' element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  )
}
