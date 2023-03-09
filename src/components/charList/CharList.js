import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import useRickAndMortyService from "../../services/RickAndMortyService";
import CharCard from "../charCard/CharCard";
import "./charList.css";

const CharList = () => {
    const {getAllCharacters} = useRickAndMortyService();
    const [charList, setCharList] = useState([]);

    useEffect(() => {
        getAllCharacters().then(data => setCharList(data));
    }, []);

    const renderItems = (arr) => {
        const elements = arr.map((item, i) => {
            return (
                <Link to={`/${item.id}`}>
                    <CharCard {...item} key={i}/>
                </Link>
            );
        });
        return elements;
    } 

    return (
        <div className="charList">
            {console.log(charList)}
            {charList && charList.length > 0 ? renderItems(charList) : "Loading..."}
        </div>
    );
}

export default CharList;