import { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from 'axios';
import './login.css';

const Login = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [profile, setProfile] = useState(null);

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

    return(
        <div className="login">
            {profile ? (
                <div className="profile">
                    <div className="profileData">
                        <img src={profile.picture} alt="user avatar" />
                        <p className="profileName">{profile.name}</p>
                    </div>
                    <button onClick={logOut}>Log out</button>
                </div>
            ) : (
                <button className="loginBtn" onClick={() => login()}>
                    Sign in with Google 🚀{" "}
                </button>
            )}
        </div>
    );
}

export default Login;