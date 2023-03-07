import { Link } from "react-router-dom";
import arrowBack from "../resources/img/arrow_back.svg";
import './singleCharPage.css';

const SingleCharPage = ({img, name, ...info}) => {

    const renderItems = (arr) => {
        return arr.map((item, i) => {
            return(
                <li className="charInfoItem" key={i}>
                    <p className="charInfoItemKey">{item[0]}</p>
                    <p className="charInfoItemValue">{item[1]}</p>
                </li>
            )
        })
    }

    return (
        <div className="singleCharPage">
            <Link to="/" className="goBack"><img src={arrowBack} alt="Arrow Back"/><h3>GO BACK</h3></Link>
            <div className="charProfile">
                <img className="charImg" src={img} alt={name}/>
                <h1 className="charName">{name}</h1>
            </div>
            <h2>Informations</h2>
            <div className="charInfo">
                <ul>
                    {renderItems(Object.entries(info))}
                </ul>
            </div>
        </div>
    );
}

export default SingleCharPage;