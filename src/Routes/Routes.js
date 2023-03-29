import React from "react";
import { Route, Routes } from "react-router-dom";
import NavesListado from "../components/ListadoNaves/ListadoNaves";
import Naves from "../Pages/Nave/Nave";
import Error404 from "../components/Error404";
import Carrusel from "../Pages/Home";

const Rout = ({
  loading,
  error,
  currentPage,
  handlePrevPage,
  handleNextPage,
  totalPages,
  starships,
  handleMostrarNave,
  mostrarNave,
}) => {
  return (
    <Routes>
      <Route path="/Home" element={<Carrusel />}></Route>
      <Route path="*" element={<Error404 />} />
      <Route path="/nave" element={<Naves mostrarNave={mostrarNave} />} />
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
    </Routes>
  );
};

export default Rout;
