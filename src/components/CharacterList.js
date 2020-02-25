import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchForm from "./SearchForm";
import CharacterCard from "./CharacterCard";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [person, setPerson] = useState([])
  // const [characterName, setCharacterName] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => { 
        setPerson(response.data.results)
        // console.log('res > ', response.data.results);
      })
      .catch(error => { console.log(error) })
  }, []);


  return (

    <section className="character-list">
      <h2>Character List</h2>
      <div>
        <SearchForm person={person} key={person.id} component={CharacterCard}/>
      </div>
    </section>
  );
}
