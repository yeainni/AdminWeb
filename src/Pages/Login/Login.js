import React, { useContext, useState } from 'react'
import "./login.scss"
import {
    signInWithEmailAndPassword,
    // getAuth,
} from "firebase/auth"
import { auth } from "../../Firebase"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../Context/AuthContext"


export default function Login() {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const handleLogin = (e) => {
        //prevent to refreshing page from submit action
        e.preventDefault();

        // const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch({ type: "LOGIN", payload: user })
                // console.log("user")
                navigate("/");
            })

            .catch((error) => {
                setError(true)
                // ..
            });
    }

    return (
        <div className='login'>
            <form onSubmit={handleLogin}>
                <input type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'> Login</button>

                {error &&
                    <p> Wrong Email or Password </p>
                }
            </form>
        </div>
    );
}