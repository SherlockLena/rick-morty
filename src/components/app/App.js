import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CharactersPage from "../../pages/CharactersPage";
import SingleCharPage from "../../pages/SingleCharPage";
import "./app.css";

function App() {
    return (
        <Router basename="/rick-morty">
            <div className="App">
                <main>
                    <Routes>
                        <Route path="/" element={<CharactersPage/>}/>
                        <Route path="/:id" element={<SingleCharPage/>}/>
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
