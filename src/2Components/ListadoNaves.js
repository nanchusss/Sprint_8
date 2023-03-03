import React, { useState, useEffect } from "react";

function NavesListado() {
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://swapi.dev/api/starships/")
      .then((response) => response.json())
      //transforma a Json
      .then((data) => {
        console.log(data.results);
        //array con objetos
        console.log(data);
        setStarships(data.results);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Naves de Starwars</h2>
      <ul>
        {starships.map((starship) => (
          <p key={starship.name}>{starship.name}</p>
        ))}
      </ul>
    </div>
  );
}

export default NavesListado;
