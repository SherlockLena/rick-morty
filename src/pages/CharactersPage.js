import { useState, useEffect } from "react";
import logo from "../resources/img/RickAndMortyLogo.png";
import loupe from "../resources/img/loupe.svg";
import CharList from "../components/charList/CharList";
import Login from "../components/login/Login";
import "./charactersPage.css";

const CharactersPage = () => {

    const [inputValue, setInputValue] = useState(localStorage.getItem('searchData') || '');

    useEffect(() => {
        if(inputValue !== " " && inputValue !== null) {
            localStorage.setItem('searchData', inputValue);
        }
    }, [inputValue]);

    return (
        <>
            <Login/>
            <div className="charsPage">
                <img src={logo} alt="Rick and Morty" className="logo" />
                <div className="filterWrapper">
                    <form>
                        <div className="search">
                            <input
                                type="text"
                                placeholder="Filter by name..."
                                value={inputValue === null ? "" : inputValue}
                                onInput={(e) => setInputValue(e.target.value)}
                            />
                            <img src={loupe} alt="loupe" className="loupe" />
                        </div>
                    </form>
                </div>
                <CharList inputValue={inputValue} />
            </div>
        </>
    );
}

export default CharactersPage;