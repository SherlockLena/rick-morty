import './charCard.css';

const CharCard = ({img, name, specie}) => {
    return(
        <div className="charCard">
            <img src={img} alt={name}/>
            <div className="charCaption">
                <p className="cardCharName">{name}</p>
                <p className="cardCharSpecie">{specie}</p>
            </div>
        </div>
    );
}

export default CharCard;