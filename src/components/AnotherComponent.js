const AnotherComponent = () => {
    
    const handleClick = () => {
        alert("clicou no botão");
    }

    return (
        <div>
            <p>Segundo Componente</p>
            <button onClick={handleClick}>Evento de Clique</button>
            <hr/>
            <button onClick={() => alert("Evento no elemento")}>Evento no Elemento</button>
        </div>
    );
}

export default AnotherComponent;