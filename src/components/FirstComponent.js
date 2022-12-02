function Firstcomponent() {
    const name = "Gilmar";
    
    return (
        <div className="firstcomponent">
            <p>Primeiro Componente</p>
            <label htmlFor="name">Nome: {name}</label><br/>
            <input type={"text"} name="name" value={name} readOnly/><br/>
            <label htmlFor="idade">Idade: {40 + 2} anos</label>
        </div>
    );
}

export default Firstcomponent;