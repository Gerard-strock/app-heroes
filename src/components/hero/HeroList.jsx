import { getHeroesByPublisher } from '../../helpers/getHeroesByPubliser'
import { HeroCard } from './HeroCard'

export const HeroList = ({ publiser }) => {
  const heroes = getHeroesByPublisher(publiser)

  return (
    <div className='row row-cols-1 row-cols-3 g-3'>
      {
        heroes.map(hero => (
          <HeroCard
            key={hero.id}
            {...hero}
          />
        ))
        }
    </div>
  )
}
