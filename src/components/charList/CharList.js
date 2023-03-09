import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useRickAndMortyService from "../../services/RickAndMortyService";
import CharCard from "../charCard/CharCard";
import "./charList.css";

const CharList = ({inputValue}) => {
    const {getAllCharacters, error, clearError} = useRickAndMortyService();
    const [charList, setCharList] = useState([]);

    useEffect(() => {
        clearError();
        getAllCharacters(inputValue ? `/?name=${inputValue}`: '')
        .then(data => setCharList(data));
    }, [inputValue]);

    const renderItems = (arr) => {
        const elements = arr.map((item, i) => {
            return (
                <Link to={`/${item.id}`} key={i}>
                    <CharCard {...item}/>
                </Link>
            );
        });
        return elements;
    } 

    return (
        <div className="charList">
            {error ? "Characters aren't found" : (charList && charList.length > 0 ? renderItems(charList) : "Loading...")}
        </div>
    );
}

export default CharList;