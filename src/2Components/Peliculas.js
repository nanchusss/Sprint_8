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
    // setActive(!active);
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
        image: informacionPelicula.image,
        opening: informacionPelicula.opening_crawl,
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
        <DivStyledPeliculas>
          {peliculasData.map((pelicula) => (
            <div key={pelicula.name}>
              <div name={pelicula.name} state={state}>
                {pelicula.name}
              </div>
              {
                <DivImagenes>
                  <div>{pelicula.title}</div>
                  <img
                    style={style.fichaPelicula}
                    src={pelicula.image}
                    alt={pelicula.name}
                    onClick={() => handlePeliculasData(pelicula)}
                    active={active}
                  />
                </DivImagenes>
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
                  <img src={pelicula.image} alt={pelicula.title} />
                  <PeliculasInfo>
                    <div> Title: {pelicula.title}</div>
                    <div> Director: {pelicula.director}</div>
                    <div> Release Date: {pelicula.date}</div>
                    <div> Opening Crawl: {pelicula.opening}</div>
                  </PeliculasInfo>
                </InfoPeliculas>
              </Modal>
            );
          })
        : null}
    </>
  );
};
const DivGeneralPeliculas = styled.div`
  font-family: url("https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap");
  display: flex;
  padding: 15px;
  border-radius: 5px;
  color: white;
  margin: 15px;
  flex-direction: row;
  align-items: baseline;
  box-shadow: "2px 2px 10px rgba(246, 246, 246, 0.3)";
`;
const InfoPeliculas = styled.div`
  color: #9b9898;
  display: grid;
  grid-template-columns: 1fr 2fr;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
  padding: 5px;
  text-align: left;
`;
const PeliculasInfo = styled.div`
  font-size: 16px;
  max-width: 100%;
  margin-left: 20px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  padding: 15px;
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
    display: "flex",
    flexDirection: "space-between",
    marginTop: "55px",
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
const DivImagenes = styled.div`
  font-size: 12px !important;
  display: grid;
  grid-template-columns: 1fr;
  margin-right: 20px;
  margin-left: 20px;
  padding: 12px;
  color: white;
`;

export default Peliculas;
