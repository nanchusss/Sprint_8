import "./App.css";
import NavesListado from "./2Components/ListadoNaves";
import Naves from "./2Components/Nave";
import { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Error404 from "./2Components/Error404";

function App() {
  const [mostrarNave, setMostrarNave] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [ships, setShips] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(`https://swapi.dev/api/starships/?page=${currentPage}`)
      .then((response) => response.json())
      //transforma a Json
      .then((data) => {
        console.log(data.results);

        //array con objetos
        console.log(data);
        setStarships(data.results);
        setTotalPages(Math.ceil(data.count / 10));
        console.log(data.count);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        setStarships([]);
      });
  }, [currentPage]);

  function handlePrevPage() {
    setCurrentPage(currentPage - 1);
  }
  function handleNextPage() {
    setCurrentPage(currentPage + 1);
  }
  function handleEstado() {
    setEstado(true);
  }
  const [State, setInitialState] = useState(true);
  const [estado, setEstado] = useState(false);

  //PABLO AQUÍ, SI DOY CLICK A MI BOTÓN CON EL NOMBRE DE LA NAVE, SE EJECUTA ESTA FUNCIÓN, MODEL SE CONVIERTE EN A.MODEL, EN EL CONSOLE.LOG ME LO CONSOLOGUEA PERFECTO, PERO ESTO NO SE REFLEJA EN  SETMOSTRARNAVE...TENGO QUE DAR DOS veces.
  function handleMostrarNave(a) {
    let model = a.model;
    let film = a.films;
    console.log(model);
    setInitialState((a) => !a);
    // console.log(a.data);

    setMostrarNave([
      ...mostrarNave,
      {
        modelo: model,
        peliculas: film,
      },
    ]);
    return (
      <>
        {mostrarNave.map((a) => {
          <p>{a.modelo}</p>;
        })}
      </>
    );

    //console.log(mostrarNave);
  }
  //---------------------------------------------------------------------------------------------
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  if (estado === false) {
    return (
      <Contenedor>
        <MensajeBienvenida estado={estado}>Bienvenido</MensajeBienvenida>
        <Btn onClick={handleEstado}>Empieza</Btn>
      </Contenedor>
    );
  }
  const renderizado = State ? (
    <Contenedor>
      <Menu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Detalle Naves</NavLink>
        {/* <NavLink to="/tienda">Tienda</NavLink> */}
      </Menu>
      <main>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route
            path="/"
            element={
              <NavesListado
                loading={loading}
                error={error}
                currentPage={currentPage}
                handlePrevPage={handlePrevPage}
                handleNextPage={handleNextPage}
                totalPages={totalPages}
                starships={starships}
                handleMostrarNave={handleMostrarNave}
              />
            }
          />
          {/* <Route path="/blog" element={<Blog />} /> */}
          <Route
            path="/blog"
            // Acá esto no funcionaba porque dentro de element va el componente tienda
            element={
              <Naves
                mostrarNave={mostrarNave}

                // productos={productos} ACA DEBERIA LLAMARSE LA API.
                // agregarProductoAlCarrito={agregarProductoAlCarrito}
              />
            }
          />
        </Routes>
      </main>
      {/* <aside>
        <Carrito carrito={carrito} setCarrito={setCarrito}></Carrito>
      </aside> */}
    </Contenedor>
  ) : (
    <Contenedor>
      <Menu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Detalle Naves</NavLink>
        {/* <NavLink to="/tienda">Tienda</NavLink> */}
      </Menu>
      <Naves mostrarNave={mostrarNave}></Naves>
    </Contenedor>
  );
  return <div className="App">{renderizado}</div>;
}
const Contenedor = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  max-width: 1000px;
  padding: 20px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0px;
  background: #fff;
  margin-left: auto;
  margin-right: auto;
`;
const Btn = styled.button`
  width: 40%;
  display: grid;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  margin-top: 50px;
  padding: 10px;
  text-align: center;
  background: #fff;
  grid-column: span 1;
`;
const MensajeBienvenida = styled.div`
  width: 100%;
  font-size: 22px;
  margin-top: 50px;
  font-weight: bold;
  text-align: center;
  background: #fff;
  grid-column: span 1;
`;

const Menu = styled.nav`
  width: 100%;
  text-align: center;
  background: #092c4c;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
  }

  a:hover {
    background: #1d85e8;
    text-decoration: none;
  }
`;

export default App;
