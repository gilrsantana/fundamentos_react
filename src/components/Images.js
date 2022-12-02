import Formas from '../assets/formas.jpg';

const Images = () => {
    return (
        <div>
            <img src="/world_cup.jpg" alt="World Cup" />
            <img src={Formas} alt="Formas"/>
        </div>
    );
}

export default Images;