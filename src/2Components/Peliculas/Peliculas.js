import { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
import {
  DivGeneralPeliculas,
  InfoPeliculas,
  DivStyledPeliculas,
  DivImagenes,
  style,
  PeliculasInfo,
} from "./Peliculas.styles";
import { Subtitulos } from "../../StyledComponents/Generales";

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
      <Subtitulos>Peliculas</Subtitulos>
      <DivGeneralPeliculas>
        {state === true
          ? peliculaInfo.map((pelicula) => {
              return (
                <Modal style={style.modal} active={active} toggle={toggle}>
                  <InfoPeliculas>
                    <img src={pelicula.image} alt={pelicula.title} />
                    <PeliculasInfo>
                      <title> Title: {pelicula.title}</title>
                      <div> Director: {pelicula.director}</div>
                      <div> Release Date: {pelicula.date}</div>
                      <div> Opening Crawl: {pelicula.opening}</div>
                    </PeliculasInfo>
                  </InfoPeliculas>
                </Modal>
              );
            })
          : null}
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
    </>
  );
};

export default Peliculas;
