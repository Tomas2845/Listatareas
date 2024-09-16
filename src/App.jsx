import "bootstrap/dist/css/bootstrap.min.css";
import Formulario from "./Componentes/Formulario";
function App() {
  return (
    <>
      <main className="container my-5">
        <h1 className="text-center">Bienvenidos</h1>
        <h4>Ingrese sus tareas</h4>
        <Formulario></Formulario>
      </main>
    </>
  );
}

export default App;
