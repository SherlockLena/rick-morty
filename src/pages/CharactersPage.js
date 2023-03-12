import { useState, useEffect } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import logo from "../resources/img/RickAndMortyLogo.png";
import loupe from "../resources/img/loupe.svg";
import CharList from "../components/charList/CharList";
import "./charactersPage.css";

const CharactersPage = () => {

    const [inputValue, setInputValue] = useState(localStorage.getItem('searchData'));
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        if(inputValue !== " ") {
            localStorage.setItem('searchData', inputValue);
        }
    }, [inputValue]);

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            setUser(codeResponse);
            localStorage.setItem('user',  JSON.stringify(codeResponse));
        },
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(() => {
        if(user) {
            axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            })
            .then((res) => {
                setProfile(res.data);
            })
            .catch((err) => console.log(err));
        }
    },[user]);

    const logOut = () => {
        googleLogout();
        setProfile(null);
        localStorage.setItem('user', null);
    };

    return (
        <>
            <div className="login">
                    {profile ? (
                        <div className="profile">
                            <div className="profileData">
                                <img src={profile.picture} alt="user avatar"/>
                                <p>{profile.name}</p>
                            </div>
                            <button onClick={logOut}>Log out</button>
                        </div>
                    ) : (<button className="loginBtn" onClick={() => login()}>Sign in with Google 🚀 </button>)}
                </div>
            <div className="charsPage">
                <img src={logo} alt="Rick and Morty" className="logo"/>
                <div className="filterWrapper">
                    <form>
                        <div className="search">
                            <input type="text" placeholder="Filter by name..." value={inputValue} onInput={(e) => setInputValue(e.target.value)}/>
                            <img src={loupe} alt="loupe" className="loupe"/>
                        </div>
                    </form>
                </div>
                <CharList inputValue={inputValue}/>
            </div>
        </>
    );
}

export default CharactersPage;