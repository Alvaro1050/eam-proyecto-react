import React, { Component } from 'react';
import Login from './containers/Login/Login';

import {Link} from 'react-router-dom';

import './App.css'
class App extends Component {
  render() {
    return (

      <div className="App">


<body className="App-body">
          <h1>Mi app de react eam</h1>
        </body>
        
      <header className="App-header"><Login /></header>
            

<div className="division">
      <Link to="post">
        <a>posts</a>
      </Link>
      <br></br>
      <Link to="albums">
      <a>albums</a>
      </Link>
      </div>
      </div>
    );
  }
}

export default App;
