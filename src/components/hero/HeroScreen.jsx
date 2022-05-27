import { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom'
import { getHeroesById } from '../../helpers/hetHeroesById'

export const HeroScreen = () => {
  const { idHero } = useParams()
  const hero = useMemo(() => getHeroesById(idHero), [idHero])
  const navigate = useNavigate()

  const handleReturn = () => {
    return navigate(-1)
  }

  if (!hero) {
    return <Navigate to='/' />
  }

  const {
    id,
    superhero,
    publisher,
    alterEgo,
    firstAppearance,
    characters
  } = hero

  const path = `/assets/${id}.jpg`

  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img
          src={path}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>

      <div className='col-8 animate__animated animate__fadeInLeft'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            {' '}
            <b>Alter ego:</b> {alterEgo}{' '}
          </li>
          <li className='list-group-item'>
            {' '}
            <b>Publisher:</b> {publisher}{' '}
          </li>
          <li className='list-group-item'>
            {' '}
            <b>First appearance:</b> {firstAppearance}{' '}
          </li>
        </ul>

        <h5 className='mt-4'>Characters</h5>
        <p>{characters}</p>
        <button className='btn btn-outline-info' onClick={handleReturn}>
          Return
        </button>
      </div>
    </div>
  )
}
