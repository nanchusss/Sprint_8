import React, { useState, useEffect } from "react";
import {
  DivGeneralPilotos,
  PilotosInfo,
  InfoPilotos,
  DivStyledPilotos,
  style,
} from "./Pilotos.styled";
import { Subtitulos } from "../../StyledComponents/Generales";
import Modal from "../../Modal/Modal";

const Pilotos = ({ pilotos }) => {
  const [pilotosData, setPilotosData] = useState([]);
  const [state, setState] = useState(false);
  const [pilotoInfo, setPilotoInfo] = useState([]);
  const [active, setActive] = useState(false);
  const toggle = () => {
    console.log("se ejecuta toggle");
    setActive(!active);
  };

  useEffect(() => {
    const getDatosPilotos = async () => {
      const newArray = pilotos.map(async (url) => {
        const piloto = await fetch(url);
        const pilotoTraido = await piloto.json();
        const pilotoId = pilotoTraido.url.split("/").filter(Boolean).pop();

        // Construir la URL de la imagen del piloto
        const imagenUrl = `https://starwars-visualguide.com/assets/img/characters/${pilotoId}.jpg`;
        console.log(imagenUrl);
        // Devolver un objeto con los datos del piloto y la URL de la imagen
        pilotoTraido.image = imagenUrl;
        console.log(pilotoTraido);
        return {
          ...pilotoTraido,
          imagenUrl,
        };
      });

      Promise.all(newArray).then((data) => {
        console.log(data);
        setPilotosData(data);
        console.log("Acáaa pilotos data", pilotosData);
      });
    };

    getDatosPilotos();
  }, [pilotos]);

  const handlePilotoInfo = (informacionPiloto) => {
    setState((a) => !a);
    setPilotoInfo([
      {
        name: informacionPiloto.name,
        height: informacionPiloto.height,
        birth: informacionPiloto.birth_year,
        gender: informacionPiloto.gender,
        hair: informacionPiloto.hair_color,
        image: informacionPiloto.image,
      },
    ]);
    console.log("se ejecuta toggle");
    setActive(!active);
    console.log(pilotoInfo);
    console.log("chichi");

    console.log(informacionPiloto.name);
  };
  if (pilotos.length > 0) {
    return (
      <>
        <Subtitulos>Pilots</Subtitulos>
        <DivGeneralPilotos>
          <DivStyledPilotos>
            {pilotosData.map((piloto) => (
              <div key={piloto.name}>
                <div
                  name={piloto.name}
                  style={style.nombrePiloto}
                  state={state}
                >
                  {piloto.name}
                </div>
                {
                  <divImagenes>
                    <img
                      style={style.fichaPiloto}
                      src={piloto.image}
                      alt={piloto.name}
                      onClick={() => handlePilotoInfo(piloto)}
                      toggle={toggle}
                      active={active}
                    />
                  </divImagenes>
                }
              </div>
            ))}
            {state === true
              ? pilotoInfo.map((piloto) => {
                  return (
                    <>
                      <Modal
                        style={style.modal}
                        active={active}
                        toggle={toggle}
                      >
                        <InfoPilotos>
                          <img src={piloto.image} alt={piloto.name} />
                          <PilotosInfo>
                            <div> Name: {piloto.name}</div>
                            <div> Height: {piloto.height} cm </div>
                            <div> Date of Birth: {piloto.birth}</div>
                            <div> Hair color: {piloto.hair}</div>
                          </PilotosInfo>
                        </InfoPilotos>
                      </Modal>
                    </>
                  );
                })
              : null}
          </DivStyledPilotos>
        </DivGeneralPilotos>
      </>
    );
  }
};

export default Pilotos;
