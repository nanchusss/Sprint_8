import casco from "../images/klipartz.com (49).png";
import styled from "styled-components";
import { keyframes } from "styled-components";

const Bienvenida = ({ handleEstado }) => {
  return (
    <ContenedorMensajeBienvenida>
      {/* <MensajeBienvenida estado={estado}>Bienvenido</MensajeBienvenida> */}
      <Imagenes>
        <img
          style={style.casco}
          data-mdb-toggle="animation"
          data-mdb-animation-reset="true"
          data-mdb-animation="slide-out-right"
          src={casco}
          alt={"hola"}
        />
      </Imagenes>

      <Btn onClick={handleEstado}>START</Btn>
    </ContenedorMensajeBienvenida>
  );
};
const style = {
  casco: {
    background: "none",
    // boxShadow: "34px 10px 66px 0px rgba(240,240,240,0.71)",
  },
};
const Btn = styled.button`
  line-height: 10px;
  display: grid;
  color: #b5b2b2;
  margin-left: auto;
  width: 200px;
  margin-right: auto;
  font-size: 22px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 30px;
  padding: 20px;
  text-align: center;
  background: #1d1c1c;
  text-transform: uppercase;
  grid-column: span 1;
  :hover {
    background: #414242;
    text-decoration: none;
  }
`;

const ContenedorMensajeBienvenida = styled.body`
  background-color: black;
  text-transform: uppercase;
`;
const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }`;

const Imagenes = styled.div`
  width: 130px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 20px;
  animation-name: ${breatheAnimation};
  animation-duration: 8s;
  animation-iteration-count: infinite;
  margin-left: auto;
  margin-right: auto;
  animation: slide-fwd-center 5s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1s both;
`;

export default Bienvenida;
