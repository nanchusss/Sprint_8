import casco from "./imagenes/casco.webp";
import {
  style,
  ContenedorMensajeBienvenida,
  Imagenes,
} from "./Bienvenida.styles";

const Bienvenida = ({ handleEstado }) => {
  return (
    <ContenedorMensajeBienvenida>
      {/* <MensajeBienvenida estado={estado}>Bienvenido</MensajeBienvenida> */}
      <Imagenes>
        <div className="overlay"></div>
        <img
          className="casco"
          style={style.casco}
          data-mdb-toggle="animation"
          data-mdb-animation-reset="true"
          data-mdb-animation="slide-out-right"
          src={casco}
          alt={"Pagina de Inicio"}
          onClick={handleEstado}
        />
      </Imagenes>
    </ContenedorMensajeBienvenida>
  );
};

export default Bienvenida;
