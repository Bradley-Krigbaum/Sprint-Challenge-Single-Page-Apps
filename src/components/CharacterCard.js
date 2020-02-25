import React from "react";
import { Card, CardHeader, CardBody, CardText, Col } from "reactstrap";
import './Character.css';


export default function CharacterCard({character}) {
  return (
    <form>
      <div className="characterList">
        <Col xs="2" md="4" xl="auto">
          <Card>
            <CardHeader>
              <label>
                {character.name}
              </label>
            </CardHeader>
            <CardBody>

              <img src={character.image} alt={character.name}/>

              <label>
                Status: 
              </label>
              <CardText>{character.status}</CardText>

              <label>
                Location: 
              </label>
              <CardText>{character.location.name}</CardText>
            </CardBody>
          </Card>
        </Col>
      </div>
    </form>
  )
}
