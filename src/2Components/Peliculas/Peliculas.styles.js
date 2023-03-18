import styled from "styled-components";

export const DivGeneralPeliculas = styled.div`
  font-family: url("https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap");
  display: flex;
  padding: 15px;
  border-radius: 5px;
  color: white;
  margin: 15px;
  flex-direction: row;
  align-items: baseline;
  justify-content: center;
  box-shadow: "2px 2px 10px rgba(246, 246, 246, 0.3)";
`;
export const InfoPeliculas = styled.div`
  color: #9b9898;
  display: grid;
  grid-template-columns: 1fr 2fr;
  flex-direction: column;
  justify-content: center;
  margin: 15px;
  padding: 5px;
  text-align: left;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;
export const PeliculasInfo = styled.div`
  font-size: 16px;
  max-width: 100%;
  margin-left: 20px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  padding: 15px;
`;
export const style = {
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
export const DivStyledPeliculas = styled.div`
  font-size: 12px !important;
  display: flex !important;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
  color: white;
  @media screen and (max-width: 700px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;
export const DivImagenes = styled.div`
  font-size: 12px !important;
  display: grid;
  grid-template-columns: 1fr;
  margin-right: 20px;
  margin-left: 20px;
  padding: 12px;
  color: white;
  @media screen and (max-width: 700px) {
    grid-template-rows: 1fr;
  }
`;
