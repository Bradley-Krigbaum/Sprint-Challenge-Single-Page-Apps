import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row } from "reactstrap";
import CharacterCard from './CharacterCard'
import './Character.css';
import SearchForm from "./SearchForm";



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [person, setPerson] = useState([])  

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => { 
        setPerson(response.data.results)
      })
      .catch(error => { console.log(error) })
  }, []);


  return (

    <section className="character-list">
      <SearchForm person={person} />
      <h2>Character List</h2>
      <Container>
        <Row>
          {person.map(character => {
            return <CharacterCard character={character} key={character.id}/>;
          })}
        </Row>
      </Container>
    </section>
  );
}
