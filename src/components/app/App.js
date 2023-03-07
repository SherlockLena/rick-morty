import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharactersPage from "../../pages/CharactersPage";
import SingleCharPage from "../../pages/SingleCharPage";
import RickTest from "../../resources/img/1.jpeg";

function App() {
    const char = {
        "img": RickTest,
        "name": "Rick Sanchez",
        "gender": "Male",
        "status": "Alive",
        "specie": "Human",
        "origin": "Earth bla bla",
        "type": "unknown"
    }
    return (
        <Router>
            <div className="App">
                <main>
                    <Routes>
                        <Route path="/" element={<CharactersPage/>}/>
                        <Route path="/1" element={<SingleCharPage {...char}/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
