import React from 'react';
import ReactDOM from 'react-dom';
import { HeroesApp } from './HeroesApp';

document.getElementById('root').style.backgroundColor = '#efecec';
document.getElementById('root').style.minHeight = '100vh';

ReactDOM.render(
    <HeroesApp/>,
  document.getElementById('root')
  
);