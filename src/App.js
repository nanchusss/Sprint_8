import "./App.css";
import NavesListado from "./2Components/ListadoNaves/ListadoNaves";
import Naves from "./Pages/Nave/Nave";
import { useState, useEffect } from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import { Name, styles, Contenedor, Menu } from "./App.styles";
import Error404 from "./2Components/Error404";
import ShipImage from "./2Components/Imagen Nave/Imagen";
import logo2 from "./images/logo.webp";
import Bienvenida from "./Pages/Bienvenida/Bienvenida";
import Formulario from "./Pages/Login/Login";
import Carrusel from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "./2Components/Links";
import Rout from "./Routes/Routes";
//import { Subtitulos } from "./StyledComponents/Generales";

function App() {
  const [mostrarNave, setMostrarNave] = useState([]);
  const [starships, setStarships] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);
  const [shipName, setShipName] = useState([]);
  const [login, setLogin] = useState(false);
  const [estadoDeLogin, setEstadoDeLogin] = useState(false);

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
  //ESTADO LOGIN---------------
  function handleEstadoDeLogin() {
    console.log("Está entrando para renderizar el componente del login");
    setEstadoDeLogin(true);
  }
  //LOGIN---------------------
  function handleLogin() {
    console.log("set login andando");
    setLogin(true);
    console.log("Bienvenido,estas loggeado");
  }
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
  const [pilotos, setPilotos] = useState([]);
  const [peliculas, setPeliculas] = useState([]);

  function handleMostrarNave(a) {
    let model = `Model: ${a.model}`;
    let film = a.films;
    let pilotitos = a.pilots;
    console.log("así viene la info de pilotos", a.pilots);
    console.log("pilotitos es...", pilotitos);
    console.log(a.pilots);
    setPilotos(pilotitos);
    setPeliculas(film);
    console.log(pilotos);
    console.log(film);
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
    return <Bienvenida handleEstado={handleEstado}></Bienvenida>;
  }
  //Esto lo comento para probar otra cosa, porqu este me desata el login.
  if (login === false) {
    return <Formulario handleLogin={handleLogin} login={login}></Formulario>;
  }
  //Si el login es falso está mostrando el login/ signup.
  // si es verdadero muestra Estas loggeado
  const renderizado = State ? (
    <Contenedor>
      {login === false ? (
        <div style={styles.divLogin}>
          <img style={styles.img} src={logo2} alt="" />

          <button style={styles.login} onClick={handleEstadoDeLogin}>
            LOGIN // SIGN UP{" "}
          </button>
        </div>
      ) : (
        <div style={styles.divLogin}>
          <img style={styles.img} src={logo2} alt="" />

          <button style={styles.login} onClick={handleEstadoDeLogin}>
            Welcome! {localStorage.getItem("email")}
          </button>
        </div>
      )}

      {estadoDeLogin === true ? <Formulario></Formulario> : null}

      {/*----------------MENÚ PRINCIPAL CON NAVLINK ARRIBA------------------------- */}

      <Link />

      <Rout
        loading={loading}
        error={error}
        currentPage={currentPage}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        totalPages={totalPages}
        starships={starships}
        handleMostrarNave={handleMostrarNave}
        mostrarNave={handleMostrarNave}
      />
    </Contenedor>
  ) : (
    // --------------------------------------------------------------------------------------------
    //Nave con Header con rutas.
    <Contenedor>
      <Link />
      <Name>{shipName}</Name>
      <ShipImage shipName={shipName} loading={loading} error={error} />
      <Naves
        pilotos={pilotos}
        mostrarNave={mostrarNave}
        peliculas={peliculas}
        shipName={shipName}
      ></Naves>
    </Contenedor>
  );
  return <div className="App">{renderizado}</div>;
}

export default App;
