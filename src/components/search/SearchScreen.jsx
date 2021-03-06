import { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

import { getHeroesByName } from '../../helpers/getHeroesByName'
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../hero/HeroCard'

export const SearchScreen = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const { q = '' } = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm({
    searchText: q
  })

  const { searchText } = formValues

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q])

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(`?q=${searchText}`)
  }

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>SearchScreen </h1>
      <hr />

      <div className='row animate__animated animate__fadeIn'>
        <div className='col-5'>
          <h4>Search For</h4>
          <hr />

          <form
            onSubmit={handleSearch}
            className='animate__animated animate__fadeIn'
          >
            <input
              type='text'
              placeholder='Search a hero...'
              className='form-control'
              name='searchText'
              autoComplete='off'
              onChange={handleInputChange}
              value={searchText}
            />

            <button className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Results</h4>
          <hr />

          {
            (q === '')
              ? <div className='alert alert-info'>Search a hero</div>
              : (heroesFiltered.length === 0) &&
                <div className='alert alert-danger'>Not found: {q}</div>
          }

          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  )
}
