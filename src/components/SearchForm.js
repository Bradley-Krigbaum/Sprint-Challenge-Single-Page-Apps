import React, { useState, useEffect } from "react";
import { Container, Row } from "reactstrap";
import CharacterCard from './CharacterCard'
import './Character.css';

export default function SearchForm({ person }) {

  // const [newCharacter, setNewCharacter] = useState([])

  // useEffect(() => {
  //   const character = (obi) => {
  //     const newPerson = [];

  //     obi.forEach( element => {
  //       // console.log("ELE: ",element);
  //       newPerson.push({
  //         id: element.id,
  //         name: element.name,
  //         image: element.image,
  //         status: element.status
  //       })
  //     })
  //     return newPerson;
  //   }
  //   setNewCharacter(character(person));
  // }, [person]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(person);

  useEffect(() => {
    // const results = person.filter(characters => {
    //   return characters.toLowerCase().includes(searchTerm.toLowerCase());
    // });

    const results = person.filter(characters => {
      return characters.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm, person]);

  const handleChange = event => {
    setSearchTerm(event.target.value)
  };

  
  return (
    <section className="search-form">
      <div>
        <form>
          <label htmlFor="name">Search:</label>
          <input
            id="id"
            type="text"
            name="name"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
        <Container>
          <Row>
            {searchResults.map(character => {
              return <CharacterCard character={character} key={character.id}/>;
            })}
          </Row>
        </Container>
      </div>
    </section>
    );
}
