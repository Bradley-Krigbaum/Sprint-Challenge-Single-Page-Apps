import React from "react";
import { Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from './components/WelcomePage';
import CharacterList from './components/CharacterList';

export default function App() {

  return (
    <main>
      <Header />
      <div>
        <Link to='/'>Home</Link>
        <Link to='/character'>Characters</Link>
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
