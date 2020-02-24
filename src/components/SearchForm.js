import React, { useState, useEffect } from "react";

export default function SearchForm({ person }) {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(person);

  // console.log("person: ", person)
  // console.log("term: ", searchTerm)
  // console.log("results: ", searchResults)

  const charactersList = person.forEach((element) => {
    console.log(element.name);
    return {
      ...element,
      name: element.name
    };
  })
  console.log("char: ", [charactersList])



  
  useEffect(() => {
    const results = person.filter(characters => {
      return characters.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setSearchResults(results);
  }, [searchTerm, person])

  const handleChange = event => {
    setSearchTerm(event.target.value)
  };

  return (
    <section className="search-form">
      <div>
        <form>
          <label htmlFor="name">Search:</label>
          <input
            id="name"
            type="text"
            name="name"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
        <div>
          <ul>
            {searchResults.map(characterName => {
              return <li key={characterName}>{characterName}</li>;
            })}
          </ul>
        </div>
      </div>
    </section>
    );
}
