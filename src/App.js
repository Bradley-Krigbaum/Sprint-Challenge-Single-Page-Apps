import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';
import { Button } from 'reactstrap';
import './style.css';


export default function App() {

  return (
    <main>
      <Header />
      <div>
        <Link to='/'>
          <Button color="primary">Home</Button>
        </Link>
        <Link to='/character'>
          <Button color="primary">Characters</Button>
        </Link>
      </div>

      <Route 
        path='/' 
        exact 
        component={WelcomePage} 
      />

      <Route 
        path='/character' 
        exact 
        render={routeProps => {

          return (
            <CharacterList {...routeProps} person="person" />
          )
        }}
      />

    </main>
  );
}
