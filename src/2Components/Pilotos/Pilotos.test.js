import React from "react";
import { render, screen } from "@testing-library/react";
import Pilotos from "./Pilotos";

// Datos de prueba
const mockPilotos = [
  "https://swapi.dev/api/people/1/",
  "https://swapi.dev/api/people/2/",
];
const mockLukeSkywalker = {
  name: "Luke Skywalker",
  url: "https://swapi.dev/api/people/1/",
};

// Mock de respuesta de la API de Star Wars
jest.mock("axios", () => ({
  get: (url) => {
    if (url === mockPilotos[0]) {
      return Promise.resolve({ data: mockLukeSkywalker });
    } else if (url === mockPilotos[1]) {
      return Promise.resolve({ data: { name: "Darth Vader" } });
    }
  },
}));

test("renders pilotos component", async () => {
  render(<Pilotos pilotos={mockPilotos} />);

  // Esperar a que los datos sean cargados
  await screen.findByText("Luke Skywalker");

  // Buscar el texto en la pantalla
  expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
});
