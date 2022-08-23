import React from "react";
import { useEffect, useState } from "react";
import { todosPersonajes } from "../funciones/funciones";
import Alert from "react-bootstrap/Alert";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);
  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);

  return (
    <>
      {personajes != null
        ? personajes.map((personaje) => (
            <Alert key={personaje.id} variant={personaje.id}>
              Datos de: {" "}
              <Alert.Link href={`/personaje/${personaje.id}`}>{personaje.name}</Alert.Link>
            </Alert>
          ))
        : "no hay personajes"}
    </>
  );
};

export default Inicio;
