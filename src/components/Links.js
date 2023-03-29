import { NavLink } from "react-router-dom";
import { Menu } from "../App.styles";
import Carrusel from "../Pages/Home";
import NavesListado from "./ListadoNaves/ListadoNaves";

const Link = ({ mostrarNave }) => {
  return (
    <>
      <Menu>
        <NavLink to="/Home" element={<Carrusel></Carrusel>}>
          HOME
        </NavLink>
        <NavLink to="/starships" element={<NavesListado />}>
          STARSHIPS
        </NavLink>
        {/* <NavLink to="/tienda">Tienda</NavLink> */}
      </Menu>
    </>
  );
};

export default Link;
