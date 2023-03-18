import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Naves from "../Pages/Nave/Nave";

const nave = {
  modelo: "Nave de Prueba",
  starship: "Nave Estelar",
  manufacturer: "Empresa Fabricante",
  cost: "1000000",
  crew: "10",
  passengers: "20",
  cargo: "500",
  consumables: "6 meses",
  length: "50 metros",
  maxAtmosphericSpeed: "1000 km/h",
};

const pilotos = ["Piloto 1", "Piloto 2", "Piloto 3"];

const peliculas = ["Película 1", "Película 2"];

describe("Naves", () => {
  test("renders spaceship information correctly", () => {
    render(
      <Naves mostrarNave={[nave]} pilotos={pilotos} peliculas={peliculas} />
    );
    //Todos estos elementos representan lo que el objeto nos tiene que devolver, modelo, starship, etc. Siendo el objeto un ejemplo solamente, lo importante son las propiedades.
    expect(screen.getByText(nave.modelo)).toBeInTheDocument();
    expect(screen.getByText(nave.starship)).toBeInTheDocument();
    expect(screen.getByText(nave.manufacturer)).toBeInTheDocument();
    expect(screen.getByText(nave.cost)).toBeInTheDocument();
    expect(screen.getByText(nave.crew)).toBeInTheDocument();
    expect(screen.getByText(nave.passengers)).toBeInTheDocument();
    expect(screen.getByText(nave.cargo)).toBeInTheDocument();
    expect(screen.getByText(nave.consumables)).toBeInTheDocument();
    expect(screen.getByText(nave.length)).toBeInTheDocument();
    expect(screen.getByText(nave.maxAtmosphericSpeed)).toBeInTheDocument();
  });
});
