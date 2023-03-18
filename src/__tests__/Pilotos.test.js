import React from "react";
import { render, screen } from "@testing-library/react";
import Pilotos from "../2Components/Pilotos/Pilotos";

describe("Pilotos component", () => {
  const pilotos = ["piloto1", "piloto2"];
  test("renders spaceship information correctly", () => {
    render(<Pilotos pilotos={[pilotos]} />);
    expect(screen.getByText("piloto1")).toBeInTheDocument();
  });
});
