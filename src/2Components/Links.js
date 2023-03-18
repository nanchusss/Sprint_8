import { NavLink } from "react-router-dom";
import { Menu } from "../App.styles";
import Carrusel from "../Pages/Home";

const Link = () => {
  return (
    <>
      <Menu>
        <NavLink to="/Home" element={<Carrusel></Carrusel>}>
          HOME
        </NavLink>
        <NavLink to="/starships">STARSHIPS</NavLink>
        {/* <NavLink to="/tienda">Tienda</NavLink> */}
      </Menu>
    </>
  );
};

export default Link;
