import styled from "styled-components";

function NavesListado({
  handleMostrarNave,
  loading,
  error,
  currentPage,
  handleNextPage,
  handlePrevPage,
  totalPages,
  starships,
}) {
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <ContenedorTotal>
      <Contenedor>
        <div>
          {starships.map((starship) => (
            <ContenedordeNombreyModelo
              onClick={() => handleMostrarNave(starship)}
            >
              <p style={styles.name} key={starship.name}>
                {starship.name}
              </p>
              <p style={styles.detalle} key={starship.length}>
                Model: {starship.model}
              </p>
            </ContenedordeNombreyModelo>
          ))}
        </div>
      </Contenedor>
      <Butons>
        <button
          style={styles.btn}
          disabled={currentPage === 1}
          onClick={handlePrevPage}
        >
          BACK
        </button>{" "}
        <button
          style={styles.btn}
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          NEXT
        </button>
      </Butons>
    </ContenedorTotal>
  );
}

const ContenedorTotal = styled.div`
  width: 100%;
  padding: 10px;
  width: 100%;
  display: grid;
  background-color: black;
  gap: 10px;
  margin-left: auto;
  margin-right: auto;
`;
const ContenedordeNombreyModelo = styled.button`
  border: 1px solid #fff;
  min-width: 700px;
  color: white;
  margin: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  background-color: #1c1c1c;
  border: none;
  :hover {
    background: #232323;
    text-decoration: none;
  }
`;

const Contenedor = styled.nav`
  width: 100%;
  flex-direction: column;
  text-align: center;

  grid-template-columns: 1fr;
  border-radius: 5px;
`;

const Butons = styled.nav`
  padding-left: 30px;
  padding-right: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const styles = {
  btn: {
    padding: "20px",
    minWidth: "150px",
    backgroundColor: "white",
    borderRadius: "5px",
    border: "1px solid #cdc8c8",
  },
  name: {
    fontSize: "20px",
    margin: "0",
    marginTop: "10px",
    weight: "bold",
    backgroundColor: "#1c1c1c",
    textTransform: "uppercase",
  },
  detalle: {
    backgroundColor: "#1c1c1c",
  },
  datos: {
    fontSize: "13px",
  },
};

export default NavesListado;
