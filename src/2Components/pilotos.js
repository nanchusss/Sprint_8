import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Pilotos = ({ pilotos }) => {
  const [pilotosData, setPilotosData] = useState([]);
  const [state, setState] = useState(false);
  const [pilotoInfo, setPilotoInfo] = useState([]);

  useEffect(() => {
    const getDatosPilotos = async () => {
      const newArray = pilotos.map(async (url) => {
        const piloto = await fetch(url);
        const pilotoTraido = await piloto.json();

        return pilotoTraido;
      });

      Promise.all(newArray).then((data) => {
        console.log(data);
        setPilotosData(data);
        console.log(pilotosData);
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
    console.log(pilotoInfo);
    console.log("chichi");
    console.log(informacionPiloto.name);
  };

  return (
    <>
      <DivGeneralPilotos>
        <div>PILOTOS</div>
        <DivStyledPilotos>
          {pilotosData.map((piloto) => (
            <div key={piloto.name}>
              <div
                name={piloto.name}
                style={style.nombrePiloto}
                state={state}
                onClick={() => handlePilotoInfo(piloto)}
              >
                {piloto.name}
              </div>
              {/* <img src={piloto.image} alt={piloto.name} /> */}
            </div>
          ))}
        </DivStyledPilotos>
      </DivGeneralPilotos>
      {state === true
        ? pilotoInfo.map((piloto) => {
            return (
              <InfoPilotos>
                <div> {piloto.name}</div>
                <div> {piloto.height}</div>
                <div> {piloto.birth}</div>
                <div> {piloto.hair}</div>
              </InfoPilotos>
            );
          })
        : null}
    </>
  );
};
const DivGeneralPilotos = styled.div`
  display: flex;
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
  margin-left: 0px;
`;
const style = {
  nombrePiloto: {
    cursor: "pointer",
    fontSize: "12px",
    margin: "10px",
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

// const Pilotos = ({ pilotos }) => {
//   //const [urlPilotos, setUrlPilotos] = useState("");
//   const [pilotosData, setPilotosData] = useState([]);
//   //const [error, setError] = useState("");

//   const newArray = pilotos.map(async (url) => {
//     const piloto = await fetch({ url });
//     const pilotoTraido = await piloto.json();

//     return pilotoTraido;
//   });

//   Promise.all(newArray).then((data) => {
//     console.log(data);
//     console.log(newArray);
//   });

//   //   useEffect(() => {
//   //    // setUrlPilotos(pilotos)

//   //     fetch({pilotos.map((a) => {
//   //     console.log("esta es la url",a);
//   //    })
//   //       .then((response) => response.json())
//   //       //transforma a Json
//   //       .then((data) => {
//   //         setPilotosData(data.results);
//   //         console.log(data.results);
//   //       })
//   //       .catch(() => {
//   //         setError("Error");
//   //       }),
//   //   }, []);
//   //   console.log("entra pilotos");

//   // console.log(urlPilotos);

//   return (
//     <>
//       <p>pilotos</p>
//     </>
//   );
// };

// export default Pilotos;
