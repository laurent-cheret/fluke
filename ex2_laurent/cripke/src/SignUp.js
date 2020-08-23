import React, { useCallback } from "react"
import { withRouter } from "react-router"
import app from "./base"

const SignUp = ({ history }) => {
    const handleSignUp = useCallback(async event => {
        event.preventDefault()
        const { email, password } = event.target.elements
        try {
            await app.auth().createUserWithEmailAndPassword(email.value, password.value);
            history.push("/");
        }
        catch (error) {
            alert(error)
        }
    }, [history])

    return (
        <div className="signUp">
            <header>
                <h1>CRIPKE</h1>
            </header>
            <div className="signUpForm"><h1>Sign Up</h1>
                <form onSubmit={handleSignUp}>
                    <label>E-mail
                    <input name="email" type="email" placeholder="Email" />
                    </label>
                    <label>
                        Password
                        <input name="password" type="password" placeholder="Password" />
                    </label>
                    <button type="submit">Sign Up</button>
                </form></div>
        </div>
    )
}

export default withRouter(SignUp);