import {
  ContenedorTotal,
  Butons,
  Contenedor,
  styles,
  ContenedordeNombreyModelo,
} from "./ListadoNaves.Styled";

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
              <div style={styles.name} key={starship.name}>
                {starship.name}
              </div>
              <div style={styles.detalle} key={starship.length}>
                Model: {starship.model}
              </div>
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
          style={styles.btn2}
          disabled={currentPage === totalPages}
          onClick={handleNextPage}
        >
          NEXT
        </button>
      </Butons>
    </ContenedorTotal>
  );
}

export default NavesListado;
