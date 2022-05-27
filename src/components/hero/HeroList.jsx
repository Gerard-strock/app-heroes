import { useMemo } from 'react'
import { getHeroesByPublisher } from '../../helpers/getHeroesByPubliser'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publiser }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publiser), [publiser])

  return (
    <div className='row row-cols-1 row-cols-3 g-3 animate__animated animate__fadeIn'>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  )
}
