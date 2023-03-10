import Carousel from "react-bootstrap/Carousel";
import imagen1 from "../images/grogu.webp";
import imagen2 from "../images/guardian.jpeg";
import image3 from "../images/tercer slide.webp";
import logoImagen2 from "../images/logodesegundaimagen.webp";
import grogulogo from "../images/grogu logo.webp";
import logo3 from "../images/logo3.webp";
import Button from "react-bootstrap/Button";

const Carrusel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={imagen1} alt="Grogu te amo" />
        <Carousel.Caption>
          <img className="d-block w-100" src={grogulogo} alt="" />

          <p classname="parrafosSubtitulo">
            The Mandalorian begins an important journey.
          </p>
          <div className="mb-2">
            <Button className="boton-grogu" variant="primary" size="lg">
              STREAM NOW
            </Button>{" "}
            <Button className="boton-grogu2" variant="primary" size="lg">
              EXPLORE
            </Button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img className="d-block w-100" src={imagen2} alt="Second slide" />

        <Carousel.Caption>
          <img
            style={style.logo}
            className="d-block"
            src={logoImagen2}
            alt=""
          />
          <p classname="parrafosSubtitulo">
            The Batch finds a mysterious missing vessel
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={style.imagen3}
          src={image3}
          alt="Third slide"
        />

        <Carousel.Caption className="caption3">
          <img className="logo3" src={logo3} alt="" />
          <p classname="parrafosSubtitulo">
            "Mando Manía" Kikcs off with new <br /> products and collectible
            highlights!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
const style = {
  logo: {
    width: "100px",
  },
};

export default Carrusel;
