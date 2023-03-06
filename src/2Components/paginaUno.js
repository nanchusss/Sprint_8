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
          <h3>
            <img src={grogulogo} alt="" />
          </h3>
          <p classname="p-mio">The Mandalorian begins an important journey.</p>
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
          <img style={style.logo} src={logoImagen2} alt="" />
          <h3>The Batch finds a mysterious missing vessel</h3>
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
          <h3>
            "Mando Manía" Kikcs off with new <br /> products and collectible
            highlights!
          </h3>
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
