import { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import styled from "styled-components";

const Peliculas = ({ peliculas }) => {
  const [peliculasData, setPeliculasData] = useState([]);
  const [state, setState] = useState(false);
  const [peliculaInfo, setPeliculaInfo] = useState([]);
  const [active, setActive] = useState(false);
  const toggle = () => {
    console.log("se ejecuta toggle");
    setActive(!active);
  };

  useEffect(() => {
    const getDatosPeliculas = async () => {
      const newArray = peliculas.map(async (url) => {
        const pelicula = await fetch(url);
        const peliculaTraida = await pelicula.json();
        const peliculaId = peliculaTraida.url.split("/").filter(Boolean).pop();

        // Construir la URL de la imagen del pelicula
        const imagenUrl = `https://starwars-visualguide.com/assets/img/characters/${peliculaId}.jpg`;
        console.log(imagenUrl);
        // Devolver un objeto con los datos del pelicula y la URL de la imagen
        peliculaTraida.image = imagenUrl;
        console.log(peliculaTraida);
        return {
          ...peliculaTraida,
          imagenUrl,
        };
      });

      Promise.all(newArray).then((data) => {
        console.log(data);
        setPeliculasData(data);
        console.log("Peliculas data", peliculasData);
      });
    };

    getDatosPeliculas();
  }, [peliculas]);

  const handlePeliculasData = (informacionPelicula) => {
    setState((a) => !a);
    setPeliculaInfo([
      {
        title: informacionPelicula.title,
        director: informacionPelicula.director,
        date: informacionPelicula.release_date,
      },
    ]);

    setActive(!active);
    console.log(peliculaInfo);
    console.log("Pelicula");
    console.log(informacionPelicula.name);
  };

  return (
    <>
      <DivGeneralPeliculas>
        <div>PELÍCULAS :</div>
        <DivStyledPeliculas>
          {peliculasData.map((pelicula) => (
            <div key={pelicula.name}>
              <div name={pelicula.name} state={state}>
                {pelicula.name}
              </div>
              {
                <divImagenes>
                  <img
                    style={style.fichaPelicula}
                    src={pelicula.image}
                    alt={pelicula.name}
                    onClick={() => handlePeliculasData(pelicula)}
                    active={active}
                  />
                </divImagenes>
              }
            </div>
          ))}
        </DivStyledPeliculas>
      </DivGeneralPeliculas>
      {state === true
        ? peliculaInfo.map((pelicula) => {
            return (
              <Modal style={style.modal} active={active} toggle={toggle}>
                <InfoPeliculas>
                  <div> Title: {pelicula.title}</div>
                  <div> Director: {pelicula.director}</div>
                  <div> Release Date: {pelicula.date}</div>
                </InfoPeliculas>
              </Modal>
            );
          })
        : null}
    </>
  );
};
const DivGeneralPeliculas = styled.div`
  display: flex;
  border: 1px solid grey;
  padding: 15px;
  border-radius: 5px;
  color: white;
  margin: 45px;
  flex-direction: row;
  align-items: baseline;
`;
const InfoPeliculas = styled.div`
  color: #9b9898;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 15px;
  padding: 5px;
  text-align: left;
`;
const style = {
  nombrePelicula: {
    color: "#b6b4b4",
    fontSize: "15px",
    margin: "10px",
  },
  fichaPelicula: {
    width: "80px",
    border: "1px solid white",
    borderRadius: "5px",
    marginTop: "15px",
    height: "100px",
    cursor: "pointer",
    margin: "10px",
  },
  modal: {
    background: "#fff",
  },
};
const DivStyledPeliculas = styled.div`
  font-size: 12px !important;
  display: flex !important;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
  color: white;
`;

export default Peliculas;
