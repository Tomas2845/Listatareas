import ListGroup from "react-bootstrap/ListGroup";
import Itemtarea from "./Itemtarea";

const Lista = ({ arrayTareas }) => {
  return (
    <ListGroup>
      {arrayTareas.map((tarea, indice ) => (
        <Itemtarea key={indice}></Itemtarea>
      ))}
    </ListGroup>
  );
};

export default Lista;
