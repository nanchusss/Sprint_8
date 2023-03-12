import { screen, render } from "@testing-library/react";
import { Peliculas } from "./Peliculas";

describe("Peliculas", () => {
  it("must display a title", () => {
    const peliculas = [""];
    render(<Peliculas />);
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});
