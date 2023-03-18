import styled from "styled-components";

export const ContenedorTotal = styled.div`
  padding: 10px;
  display: grid;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
`;
export const ContenedordeNombreyModelo = styled.button`
  border: 1px solid #fff;
  min-width: 700px;
  color: white;
  margin: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: #1c1c1c;
  border: none;
  :hover {
    background: #3b3b3b;
    text-decoration: none;
    opacity: 0.6;
  }
`;

export const Contenedor = styled.nav`
  width: 100%;
  flex-direction: column;
  text-align: center;
  grid-template-columns: 1fr;
  border-radius: 5px;
`;

export const Butons = styled.nav`
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const styles = {
  btn: {
    height: "60px",
    minWidth: "250px",
    color: "white",
    cursor: "pointer",
    weight: "bold",
    borderRadius: "30px",
    border: "2px solid #c5e029",
  },
  btn2: {
    height: "60px",
    minWidth: "250px",
    color: "white",
    backgroundColor: "black",
    borderRadius: "30px",
    border: "2px solid #c5e029",
  },
  name: {
    fontSize: "20px",
    margin: "0",
    marginTop: "10px",
    weight: "bold",
    background: "none",
    textTransform: "uppercase",
  },
  detalle: {
    background: "none",
  },
  datos: {
    fontSize: "13px",
  },
};
