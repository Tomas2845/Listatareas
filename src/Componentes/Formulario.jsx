import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Lista from "./Lista"
import Itemtarea from "./Itemtarea";

const Formulario = () => {
  return (
    <section>
      <Form>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="tarea" />
        <Button variant="primary" type="submit" className="ms-2">
          Enviar
        </Button>
        </Form.Group>
      </Form>
      <Lista></Lista>
    </section>
  );
};

export default Formulario;
