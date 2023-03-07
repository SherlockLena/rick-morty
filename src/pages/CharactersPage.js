import logo from "../resources/img/RickAndMortyLogo.png";
import loupe from "../resources/img/loupe.svg";
import CharList from "../components/charList/CharList";
import "./charactersPage.css";

const CharactersPage = () => {
    return (
        <div className="charsPage">
            <img src={logo} alt="Rick and Morty" className="logo"/>
            <div className="filterWrapper">
                <form>
                    <div className="search">
                        <input type="text" placeholder="Filter by name..."/>
                        <img src={loupe} alt="loupe" className="loupe"/>
                    </div>
                </form>
            </div>
            <CharList/>
        </div>
    );
}

export default CharactersPage;