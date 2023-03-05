import "./App.css";
import NavesListado from "./2Components/ListadoNaves";
import Naves from "./2Components/Nave";
import { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Error404 from "./2Components/Error404";
import ShipImage from "./2Components/imagen";
import logo from "./images/1.png";
import logo2 from "./images/klipartz.com (43).png";
import logo3 from "./images/klipartz.com (48).png";
import casco from "./images/klipartz.com (49).png";
import Bienvenida from "./2Components/bienvenida";

function App() {
  const [mostrarNave, setMostrarNave] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [shipName, setShipName] = useState([]);

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

  function handleMostrarNave(a) {
    let model = `Model: ${a.model}`;
    let film = a.films;
    console.log(model);
    setInitialState((a) => !a);
    // console.log(a.data);
    setShipName(a.name);
    console.log(shipName);

    setMostrarNave([
      ...mostrarNave,
      {
        starship: `Starship Class: ${a.starship_class}`,
        modelo: model,
        peliculas: film,
        manufacturer: `Manufacturer: ${a.manufacturer}`,
        cost: `Cost: ${a.cost_in_credits}`,
        crew: `Crew: ${a.crew}`,
        passengers: `Passenger Capacity: ${a.passengers}`,
        cargo: `Cargo Capacity: ${a.cargo_capacity}`,
        consumables: `Consumables: ${a.consumables}`,
        length: `Length: ${a.length}`,
        maxAtmosphericSpeed: `Maximum Atmosphering Speed: ${a.max_atmosphering_speed}`,
        hiper: `Hiperdrive Rating: ${a.hyperdrive_rating}`,
        pilots: `Pilots: ${a.pilots}`,
      },
    ]);
    return;

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
      <Bienvenida handleEstado={handleEstado}></Bienvenida>
      // <ContenedorMensajeBienvenida>
      //   {/* <MensajeBienvenida estado={estado}>Bienvenido</MensajeBienvenida> */}
      //   <Imagenes>
      //     <img src={casco} alt={"hola"} />
      //   </Imagenes>

      //   <Btn onClick={handleEstado}>START</Btn>
      // </ContenedorMensajeBienvenida>
    );
  }
  const renderizado = State ? (
    <Contenedor>
      <img style={styles.img} src={logo2} alt="" />
      <Menu>
        <NavLink to="/Home">HOME</NavLink>
        <NavLink to="/starships">STARSHIPS</NavLink>
        {/* <NavLink to="/tienda">Tienda</NavLink> */}
      </Menu>
      <main>
        <Routes>
          <Route path="/Home" element={<Bienvenida />}></Route>
          <Route path="*" element={<Error404 />} />
          <Route
            path="/starships"
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
          <Route path="/nave" element={<Naves mostrarNave={mostrarNave} />} />
        </Routes>
      </main>
      {/* <aside>
        <Carrito carrito={carrito} setCarrito={setCarrito}></Carrito>
      </aside> */}
    </Contenedor>
  ) : (
    <Contenedor>
      <Menu>
        <NavLink to="/Home">HOME</NavLink>
        <NavLink to="/starships">STARSHIPS</NavLink>
        {/* <NavLink to="/tienda">Tienda</NavLink> */}
      </Menu>

      <Name>{shipName}</Name>
      <ShipImage shipName={shipName} loading={loading} error={error} />
      <Naves mostrarNave={mostrarNave}></Naves>
    </Contenedor>
  );
  return <div className="App">{renderizado}</div>;
}

const Name = styled.div`
  color: white;
  text-transform: uppercase;
  font-size: 32px;
  margin-top: 20px;
  padding: 15px;
  font-family: src("https://fonts.googleapis.com");
`;
const styles = {
  img: {
    width: "200px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    marginLeft: "auto",
    marginRight: "auto",
  },
};
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
  margin-left: auto;
  margin-right: auto;
`;

const Menu = styled.nav`
  max-width: 1200px;
  width: 100%;
  text-decoration: none;
  margin-top: 30px;
  border: 3px solid #61606033;
  text-align: center;
  grid-column: span 2;
  border-radius: 3px;

  a {
    color: #fff;
    display: inline-block;
    padding: 15px 20px;
    border: 3px solid #61606033;
  }

  a:hover {
    background: #414242;
    text-decoration: none;
  }
`;

export default App;
