import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Modal from "../Modal/Modal";

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
      },
    ]);
    console.log("se ejecuta toggle");
    setActive(!active);
    console.log(pilotoInfo);
    console.log("chichi");
    console.log(informacionPiloto.name);
  };

  return (
    <>
      <DivGeneralPilotos>
        <div>PILOTOS:</div>
        <DivStyledPilotos>
          {pilotosData.map((piloto) => (
            <div key={piloto.name}>
              <div name={piloto.name} style={style.nombrePiloto} state={state}>
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
        </DivStyledPilotos>
      </DivGeneralPilotos>
      {state === true
        ? pilotoInfo.map((piloto) => {
            return (
              <Modal style={style.modal} active={active} toggle={toggle}>
                <InfoPilotos>
                  <div> Name: {piloto.name}</div>
                  <div> Height: {piloto.height} cm </div>
                  <div> Date of Birth: {piloto.birth}</div>
                  <div> Hair color: {piloto.hair}</div>
                </InfoPilotos>
                <div>Este valor indica el número de páginas de la Web</div>
              </Modal>
            );
          })
        : null}
    </>
  );
};
const DivGeneralPilotos = styled.div`
  display: flex;
  border: 1px solid grey;
  padding: 15px;
  border-radius: 5px;
  color: white;
  flex-direction: row;
  align-items: baseline;
`;
const InfoPilotos = styled.div`
  color: #dfdcdc;
  display: flex;
  flex-direction: column;
  margin: 15px;
  padding: 5px;
  align-items: center;
  justify-content: center;
  text-align: left;
`;
const style = {
  nombrePiloto: {
    color: "#b6b4b4",
    fontSize: "15px",
    margin: "10px",
  },
  fichaPiloto: {
    width: "80px",
    border: "1px solid white",
    borderRadius: "5px",
    marginTop: "15px",
    height: "100px",
    cursor: "pointer",
  },
  modal: {
    background: "#fff",
  },
};
const DivStyledPilotos = styled.div`
  font-size: 12px !important;
  display: flex !important;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
  color: white;
`;

export default Pilotos;
