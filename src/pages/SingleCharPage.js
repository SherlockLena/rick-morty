import { useState, useEffect } from "react";
import { Link, useParams} from "react-router-dom";
import arrowBack from "../resources/img/arrow_back.svg";
import useRickAndMortyService from "../services/RickAndMortyService";
import './singleCharPage.css';

const SingleCharPage = () => {
    const {id} = useParams();
    const {getCharacter} = useRickAndMortyService();
    const [char, setChar] = useState(null);

    useEffect(() => {
        getCharacter(id).then(data => setChar(data));
    }, [id]);


    const renderInfoItems = (arr) => {
        return arr.map((item, i) => {
            if(item[0] !== 'id') {
                return(
                    <li className="charInfoItem" key={i}>
                        <p className="charInfoItemKey">{item[0]}</p>
                        <p className="charInfoItemValue">{item[1] ? item[1] : "Unknown"}</p>
                    </li>
                );
            } else return null;
        });
    }

    const renderContent = ({img, name, ...info}) => {
        return (
            <>
                <Link to="/" className="goBack"><img src={arrowBack} alt="Arrow Back"/><h3>GO BACK</h3></Link>
                <div className="charProfile">
                    <img className="charImg" src={img} alt={name}/>
                    <h1 className="charName">{name}</h1>
                </div>
                <h2>Informations</h2>
                <div className="charInfo">
                    <ul>
                        {renderInfoItems(Object.entries(info))}
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div className="singleCharPage">
            {char ? renderContent(char) : 'Loading...'}
        </div>
    );
}

export default SingleCharPage;