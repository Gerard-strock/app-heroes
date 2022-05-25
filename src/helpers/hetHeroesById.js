import { heroes } from '../data/heroes'

export const getHeroesById = (id) => {
  const hero = heroes.find(hero => hero.id === id)
  if (!hero) {
    throw new Error(`No hero with id: ${id}`)
  }
  return hero
}
