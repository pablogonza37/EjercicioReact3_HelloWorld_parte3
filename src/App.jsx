import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import './App.css'
import Titulo from "./components/Titulo";

function App() {

  return (
    <Container>
      <Titulo mensajeProps='my friend'></Titulo>
    </Container>
  )
}

export default App
