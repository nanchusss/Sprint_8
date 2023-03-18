import styled from "styled-components";

export const Name = styled.div`
  color: white;
  text-transform: uppercase;
  font-size: 54px;
  margin-top: 20px;
  font-weight: bold;
  padding: 15px;
  font-family: src(
    "https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap"
  );
`;
export const styles = {
  img: {
    paddingLeft: "100px",
    width: "300px",
    position: "sticky",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    marginLeft: "auto",
    marginRight: "auto",
  },
  login: {
    border: "none",
    justifyContent: "end",
    alignItems: "center",

    display: "flex",
    color: "white",
  },
  divLogin: {
    width: "100%",
    display: "flex",
    color: "grey",
    flexDirection: "row",
    marginLeft: "150px",
  },
};
export const Contenedor = styled.div`
  padding: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
`;

export const Menu = styled.nav`
  border-right-style: none !important;
  border-left-style: none !important;
  max-width: 1200px;
  width: 100%;
  text-decoration: none;
  margin-top: 30px;
  border: 3px solid #86858533;
  text-align: center;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
    /* border: 3px solid #61606033; */
  }

  a:hover {
    background: #414242;
    opacity: 0.6;
    color: #fff;
    text-decoration: none;
  }
  a:active,
  a:visited,
  a:link {
    text-decoration: none;
  }
`;
