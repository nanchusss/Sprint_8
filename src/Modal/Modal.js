import { Component } from "react";
import Portal from "../Modal/Portal";
//Siempre recordar modificar el Index.html!

export default class Modal extends Component {
  render() {
    const { children, toggle, active } = this.props;
    return (
      <Portal>
        {active && (
          <div style={styles.wrapper} onClick={toggle}>
            <div style={styles.window}>
              <div>{children}</div>
            </div>
          </div>
        )}
      </Portal>
    );
  }
}

//estilos del componente.

const styles = {
  wrapper: {
    position: "absolute",
    top: 300,
    left: 0,
    width: "100%",
    background: "#18181899",
    color: "black",
    opacity: "0,5",
    height: "100%",
    minHeight: "1000px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  window: {
    position: "relative",
    borderRadius: 5,
    padding: 20,
    boxShadow: "2px 2px 10px rgba(90, 87, 87, 0.3)",
    zIndex: 10,
    minWidth: 420,
    minHeight: 80,
  },
};
