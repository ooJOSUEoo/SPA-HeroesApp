import { heroes } from "../data/heroes";

export const getHeroesByName = (name = '') => {
    if (name.length === 0) {
        return [];
    }else{
        const heroesByName = heroes.filter(hero => hero.superhero.toLowerCase().includes(name.toLowerCase()));
        return heroesByName;
    }
}