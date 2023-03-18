import styled from "styled-components";
import { keyframes } from "styled-components";

export const ContenedorMensajeBienvenida = styled.body`
  background-color: black;
  text-transform: uppercase;
`;
export const style = {
  casco: {
    background: "none",
    //boxShadow: "34px 10px 66px 0px rgba(240,240,240,0.71)",
  },
};
export const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }`;

export const Imagenes = styled.div`
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
