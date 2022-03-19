import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const {q = ''} = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });

  const { searchText } = formValues;
  const heroesFileted = useMemo(() => getHeroesByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
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
                (q === '')
                ? <p className='alert alert-info'>Escribe el nombre de un heroe para iniciar la búsqueda</p>
                : (heroesFileted.length === 0) && <p className='alert alert-danger'>No hay resultados para la búsqueda: {q}</p>
              }
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
