import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Lista from "./Lista";
import Itemtarea from "./Itemtarea";
import { useForm } from "react-hook-form";

const Formulario = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <section>
      <Form onSubmit={handleSubmit(onSubmit)} className="mb-3">
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="tarea"
            {...register("tarea", {
              required: "La tarea es un dato obligatorio",
              minLength: {
                value: 2,
                message: "La tarea debe tener como minimo 2 caracteres",
              },
              maxLength: {
                value: 20,
                message: "La tarea debe tener como maximo 20 caracteres",
              },
            })}
          />
          <Button variant="primary" type="submit" className="ms-2">
            Enviar
          </Button>
        </Form.Group>
        <Form.Text className="text-danger mb-3">
          {errors.tarea?.message}
        </Form.Text>
      </Form>
      <Lista></Lista>
      <Lista></Lista>
      <Lista></Lista>
      <Lista></Lista>
    </section>
  );
};

export default Formulario;
