import { useState, useEffect } from "react";

const Hooks = () => {
    
    const ChangeAge = () => {
        idade = 31;
    };

    const ChangeNewAge = () => {
        if(novaIdade === 40)
            setNovaIdade(45);
        else
            setNovaIdade(40);
    }

    useEffect(() => {
        alert("Testando!!!");
    })

    let idade = 30;
    const [novaIdade, setNovaIdade] = useState(40)
    
    return (
        <div>
            <p>Idade: {idade}</p>
            <button onClick={ChangeAge}>Mudar Idade</button>
            <p>Idade: {novaIdade}</p>
            <button onClick={ChangeNewAge}>Mudar Idade</button>
        </div>
    );
}

export default Hooks;