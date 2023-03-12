import { Component } from "react";
import Portal from "../Modal/Portal";
import { styles } from "./Modal.styles";
//Siempre recordar modificar el Index.html!

export default class Modal extends Component {
  render() {
    const { children, toggle, active } = this.props;
    return (
      <Portal>
        {active && (
          <div style={styles.wrapper} onClick={toggle}>
            <div style={styles.window} onClick={toggle}>
              <div>{children}</div>
            </div>
          </div>
        )}
      </Portal>
    );
  }
}
