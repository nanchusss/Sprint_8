import casco from "../images/klipartz.com (49).png";
import styled from "styled-components";

const Bienvenida = ({ handleEstado }) => {
  return (
    <ContenedorMensajeBienvenida>
      {/* <MensajeBienvenida estado={estado}>Bienvenido</MensajeBienvenida> */}
      <Imagenes>
        <img src={casco} alt={"hola"} />
      </Imagenes>

      <Btn onClick={handleEstado}>START</Btn>
    </ContenedorMensajeBienvenida>
  );
};

const Btn = styled.button`
  line-height: 10px;
  display: grid;
  color: #b5b2b2;
  margin-left: auto;
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

const Imagenes = styled.div`
  width: 100px;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
`;
export default Bienvenida;
