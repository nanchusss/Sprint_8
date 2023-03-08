import React, { useState, useEffect } from "react";
import axios from "axios";

function NavesDeStarWars() {
  const [naves, setNaves] = useState([]);

  useEffect(() => {
    async function fetchNaves() {
      try {
        const response = await axios.get("https://swapi.dev/api/starships/");
        setNaves(response.data.results);
        console.log(naves.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchNaves();
  }, []);

  async function fetchPilotos(url) {
    console.log("buscando los pilotos");
    try {
      const response = await axios.get(url);
      console.log(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      {naves.map((nave) => (
        <div key={nave.url} className="nave">
          <h2>{nave.name}</h2>
          <p>Pilotos:</p>
          <div className="pilotos">
            {nave.pilots.map((pilotoUrl) => (
              <div
                key={pilotoUrl}
                className="piloto"
                onClick={() => fetchPilotos(pilotoUrl)}
              >
                <img src="ruta_de_la_imagen" alt="Foto del piloto" />
                <p>{pilotoUrl}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default NavesDeStarWars;
