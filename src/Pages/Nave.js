import React from "react"; //En este componente debería aparecer la información de cada nave
import styled from "styled-components";
import Pilotos from "../2Components/Pilotos";
import Peliculas from "../2Components/Peliculas";
import { Subtitulos } from "../StyledComponents/Generales";

// Acá lo que voy a poner es que se recibe por ejemplo el nombre de la nave y que eso me va a ejecutar  una función que va a traer de la api la información que pido según el id.

const Naves = ({ mostrarNave, pilotos, peliculas }) => {
  console.log(pilotos);
  console.log(peliculas);
  console.log("entra pilotos");
  // console.log(mostrarNave[0]);
  return (
    <>
      {mostrarNave.map((a, index) => {
        return (
          <>
            <Contenedor1>
              <p>{a.modelo}</p>
              <p>{a.starship}</p>
              <p>{a.manufacturer}</p>
              <p>{a.cost}</p>
              <p>{a.crew}</p>
              <p>{a.passengers}</p>
              <p>{a.cargo}</p>
              <p>{a.consumables}</p>
              <p>{a.length}</p>
              <p>{a.maxAtmosphericSpeed}</p>
            </Contenedor1>
            <Subtitulos>PILOTOS</Subtitulos>
            <Pilotos pilotos={pilotos}></Pilotos>
            <Subtitulos>PELICULAS</Subtitulos>
            <Peliculas peliculas={peliculas}></Peliculas>
          </>
        );
      })}
    </>
  );
};

const Contenedor1 = styled.div`
  max-width: 600px;
  padding: 15px;
  padding-left: 20px;
  font-size: 12px;
  background-color: #151414;
  width: 90%;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  color: #bfbebe;
  margin-left: auto;
  margin-bottom: 50px;
  margin-right: auto;
  text-transform: uppercase;
`;
// const Contenedor2 = styled.div`
//   max-width: 1000px;
//
//   display: grid;
//   text-align: left;
//   grid-template-columns: 1fr 1fr;
//   margin-left: auto;
//   color: white;
//   margin-right: auto;
//   font-size: 16px;
//   text-transform: uppercase;
// `;
export default Naves;
