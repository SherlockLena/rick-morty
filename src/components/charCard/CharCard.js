import './charCard.css';

const CharCard = ({img, name, species}) => {
    return(
        <div className="charCard">
            <img src={img} alt={name}/>
            <div className="charCaption">
                <p className="cardCharName">{name}</p>
                <p className="cardCharSpecie">{species}</p>
            </div>
        </div>
    );
}

export default CharCard;