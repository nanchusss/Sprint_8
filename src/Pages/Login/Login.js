import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ContainerForm, style } from "./Login.styles";
import { useState, useEffect } from "react";
import logo from "./Images/descarga.png";
import "../../App.css";

const Formulario = ({ handleLogin, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("email", email);
    console.log(email);
    localStorage.setItem("password", password);
    setLoggedIn(true);
  };
  useEffect(() => {
    console.log("Cambio en login");
    localStorage.setItem("email", JSON.stringify(email));
  }, [email]);

  useEffect(() => {
    console.log("Cambio en total");
    localStorage.setItem("password", JSON.stringify(password));
  }, [password]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    setLoggedIn(false);
  };

  return (
    <ContainerForm>
      <img style={style.img} src={logo} alt="" />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label class="mb-3 text-warning text-center lh-lg">
            ENTER YOUR EMAIL ADDRESS TO ACCESS
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Check me out"
            onChange={handleLogout}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onChange={handleSubmit}
          onClick={handleLogin}
        >
          Submit
        </Button>
      </Form>
    </ContainerForm>
  );
};

export default Formulario;
