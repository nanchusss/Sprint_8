import styled from "styled-components";
export const DivGeneralPilotos = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  color: white;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  box-shadow: "2px 2px 10px rgba(182, 178, 178, 0.3)";
`;
export const PilotosInfo = styled.div`
  font-size: 16px;
  margin-left: 20px;
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  padding: 15px;
`;
export const InfoPilotos = styled.div`
  color: #dfdcdc;
  display: grid;
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  margin: 15px;
  padding: 5px;
  text-align: left;
`;
export const style = {
  nombrePiloto: {
    color: "#b6b4b4",
    fontSize: "15px",
    margin: "10px",
  },
  fichaPiloto: {
    width: "220px",
    margin: "30px",
    borderRadius: "5px",
    marginTop: "15px",
    marginLeft: "35px",
    marginRight: "35px",
    height: "270px",
    cursor: "pointer",
  },
  modal: {
    background: "#fff",
  },
};
export const DivStyledPilotos = styled.div`
  font-size: 12px !important;
  display: flex !important;
  flex-direction: row;
  margin: 10px;
  padding: 10px;
  color: white;
`;
