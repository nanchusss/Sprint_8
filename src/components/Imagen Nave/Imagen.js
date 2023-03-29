import React, { useState, useEffect } from "react";
import axios from "axios";
import { styles, DivImagen } from "./Imagen.styled";

const ShipImage = ({ shipName, loading, error }) => {
  const [shipImage, setShipImage] = useState("");
  const [idNave, setIdNave] = useState("");
  console.log("Entra ShipImage para setear la imagen");
  console.log(idNave);
  useEffect(() => {
    const obtenerIdNave = async () => {
      if (shipName) {
        const response = await axios.get(
          `https://swapi.dev/api/starships/?search=${shipName}`
        );
        const results = response.data.results;
        if (results.length > 0) {
          const url = results[0].url;
          console.log("esta es la url: ", url);
          const id = url.split("/").slice(-2)[0];
          setIdNave(id);
          console.log("este es el id de la nave", idNave);
        }
      }
    };
    obtenerIdNave();
  }, [shipName]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        console.log(idNave);
        setShipImage(
          `https://starwars-visualguide.com/assets/img/starships/${idNave}.jpg`
        );
        console.log(shipImage);
      } catch (error) {
        console.error(error);
      }
    };
    fetchImage();
  }, [idNave]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <DivImagen>
      {shipImage ? (
        <img style={styles.img} src={shipImage} alt={idNave} />
      ) : (
        <p style={styles.p}>Loading...</p>
      )}
    </DivImagen>
  );
};

export default ShipImage;
