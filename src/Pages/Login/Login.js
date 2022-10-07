import React, { useState } from 'react'
import "./login.scss"
import {
    createUserWithEmailAndPassword,
    // getAuth,
} from "firebase/auth"
import { auth } from "../../Firebase";


export default function Login() {

    const [error, setError] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        //prevent to refreshing page from submit action
        e.preventDefault();

        // const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
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