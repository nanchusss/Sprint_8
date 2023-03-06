import React from "react"; //En este componente debería aparecer la información de cada nave
import styled from "styled-components";

// Acá lo que voy a poner es que se recibe por ejemplo el nombre de la nave y que eso me va a ejecutar  una función que va a traer de la api la información que pido según el id.

const Naves = ({ mostrarNave }) => {
  // console.log(mostrarNave[0]);
  return (
    <>
      <div>
        {mostrarNave.map((a, index) => {
          return (
            <>
              <Contenedor1>
                <p>{a.modelo}</p>
                <p>{a.starship}</p>
                <p>{a.manufacturer}</p>
                <p>{a.cost}</p>
              </Contenedor1>
              <Contenedor2>
                <p>{a.crew}</p>
                <p>{a.passengers}</p>
                <p>{a.cargo}</p>
                <p>{a.consumables}</p>
                <p>{a.length}</p>
                <p>{a.maxAtmosphericSpeed}</p>
                <p>{a.pilots}</p>
              </Contenedor2>
            </>
          );
        })}
      </div>
    </>
  );
};
const Contenedor1 = styled.div`
  max-width: 1000px;
  padding: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  color: white;
  margin-left: auto;
  margin-right: auto;
  text-transform: uppercase;
`;
const Contenedor2 = styled.div`
  max-width: 1000px;
  padding: 10px;
  display: grid;
  text-align: left;
  grid-template-columns: 1fr 1fr;
  margin-left: auto;
  color: white;
  margin-right: auto;
  text-transform: uppercase;
`;
export default Naves;
