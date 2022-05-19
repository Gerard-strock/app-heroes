import { Route, Routes } from 'react-router-dom'
import { DcScreen } from '../dc/DcScreen'
import { MarvelScreen } from '../marvel/MarvelScreen'
import { SearchScreen } from '../search/SearchScreen'
import { Navbar } from '../ui/Navbar'

export const DashBoardRouts = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/marvel' element={<MarvelScreen />} />
        <Route path='/dc' element={<DcScreen />} />
        <Route path='/search' element={<SearchScreen />} />

        <Route path='/' element={<MarvelScreen />} />
      </Routes>
    </div>
  )
}