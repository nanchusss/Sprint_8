import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { useState, useEffect } from "react";
import logo from "../images/descarga.png";
import "../App.css";

const Formulario = ({ handleLogin }) => {
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

  if (loggedIn) {
    console.log("estas loggeado");
    return (
      <div>
        <p>You are logged in as {localStorage.getItem("email")}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <ContainerForm>
      <img style={style.img} src={logo} alt="" />
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
          <Form.Label class="mb-3 text-warning text-center lh-lg">
            ENTER YOUR EMAIL ADDRESS
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
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onChange={handleSubmit}>
          Submit
        </Button>
      </Form>
    </ContainerForm>
  );
};

const ContainerForm = styled.form`
  max-width: 700px;
  min-width: 500px;
  /* background-color: #181818; */
  color: #beb8b8;
  display: flex;
  font-size: 22px;
  margin-top: 60px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`;
const style = {
  img: {
    width: "322px",
  },
};

export default Formulario;
