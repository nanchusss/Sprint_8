import React from "react"; //En este componente debería aparecer la información de cada na
import Pilotos from "../../2Components/Pilotos/Pilotos";
import Peliculas from "../../2Components/Peliculas/Peliculas";
import { Contenedor1 } from "./Nave.styles";

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
          <div>
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

            <Pilotos pilotos={pilotos} title="Pilotos"></Pilotos>

            <Peliculas peliculas={peliculas}></Peliculas>
          </div>
        );
      })}
    </>
  );
};

export default Naves;
