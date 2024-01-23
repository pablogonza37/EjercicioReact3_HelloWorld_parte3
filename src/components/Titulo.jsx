import Button from 'react-bootstrap/Button';
import { useState } from "react";

const Titulo = (props) => {
    const [mensaje, setMensaje] = useState({ msj: '' });
  

  return (
    <article className='text-center'>
      <h1 className="display-1 text-center">Hello {props.mensajeProps}{mensaje.msj}!</h1>
      <Button variant="dark" onClick={() => setMensaje({ msj: ' (from changed state)' })}>Click me</Button>
    </article>
  );
};

export default Titulo;
