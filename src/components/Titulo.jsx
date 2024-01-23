const Titulo = (props) => {
    return (
        <h1 className="display-1 text-center">
           Hello {props.mensajeProps}!
        </h1>
    );
};

export default Titulo;