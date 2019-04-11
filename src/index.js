import React from 'react';
import ReactDOM from 'react-dom';


import Router from './utilidades/router';
import './index.sass';


export const App = () => {
  return <Router/>
}


ReactDOM.render(<App />, document.getElementById('root')
);
