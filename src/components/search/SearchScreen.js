import React from 'react'
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const [formValues, handleInputChange] = useForm({
    searchText: '',
  });

  const { searchText } = formValues;
  const heroesFileted = getHeroesByName('jks');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('searchText', searchText);
  }

  return (
    <>
        <h1>Búsquedas</h1>
        <hr/>
        <div className='row'>

          <div className='col-5'>

            <form onSubmit={handleSearch}>

              <div className="form-group">
                <input type="text" className="form-control" name='searchText' 
                placeholder="Buscar un heroe" autoComplete='off' value={searchText} onChange={handleInputChange}/>
              </div>

              <button type="submit" className="btn btn-primary mt-2">Buscar</button>
            </form>
          </div>

          <div className='col-7'>
            <h4>Resultados de la búsqueda</h4>
            <hr/>
              {
                heroesFileted.map(hero => (
                  <HeroCard key={hero.id} {...hero} />
                )) 
              }
            </div>
        </div>
    </>
  )
}
