import React from "react";
import { useEffect, useState } from "react";
import { todosPersonajes } from "../funciones/funciones";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);

  useEffect(() => {
    todosPersonajes(setPersonajes);
  }, []);

  const [search, setSearch] = useState("");

  return (
    <div>
      {/*
      {personajes != null
        ? personajes.map((personaje) => (
            <Alert key={personaje.id} variant={personaje.id}>
              Datos de: {" "}
              <Alert.Link href={`/personaje/${personaje.id}`}>{personaje.name}</Alert.Link>
            </Alert>
          ))
        : "no hay personajes"}
        */}

      <Form>
        <InputGroup className="my-3">
          {/* onChange for search */}
          <Form.Control
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nombre de pensonaje"
          />
        </InputGroup>
      </Form>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Foto</th>
            <th scope="col">ver mas acerca del personaje</th>
          </tr>
        </thead>
        <tbody>
          {personajes != null
            ? personajes
                .filter((personaje) => {
                  return search.toLowerCase() === ""
                    ? personaje
                    : personaje.name.toLowerCase().includes(search);
                })
                .map((personaje) => (
                  <tr key={personaje.id}>
                    <th scope="row" key={personaje.id}>
                      {personaje.id}
                    </th>
                    <td>{personaje.name}</td>
                    <td>
                      {" "}
                      <img
                        src={personaje.image}
                        height="30"
                        width="30"
                        className="rounded-circle"
                        alt=""
                      />{" "}
                    </td>
                    <td>
                      {" "}
                      <a href={`/personaje/${personaje.id}`}>Ver más</a>{" "}
                    </td>
                  </tr>
                ))
            : "no hay personaje"}
        </tbody>
      </Table>
    </div>
  );
};

export default Inicio;
