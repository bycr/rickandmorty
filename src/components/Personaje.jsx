import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { unicoPersonaje } from "../funciones/funciones";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null);

  const params = useParams();
  useEffect(() => {
    unicoPersonaje(params.id, setPersonaje);
  }, [params.id]);

  return (
    <>
      {personaje != null ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={personaje.image} />
          <Card.Title>{personaje.name}</Card.Title>
          <Card.Text>Estado: {personaje.status} </Card.Text>
          <Card.Text>Especie: {personaje.species} </Card.Text>
          <Card.Text>Genero: {personaje.gender} </Card.Text>
          <Button href="/" variant="outline-dark">
            Atras
          </Button>
        </Card>
      ) : (
        "no hay personaje"
      )}
    </>
  );
};

export default Personaje;
