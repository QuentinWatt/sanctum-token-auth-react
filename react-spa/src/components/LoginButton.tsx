import React, { useContext } from "react"
import AuthContext from "../contexts/AuthContext";

const LoginButton: React.FC = () => {
    const {setIsAuthenticated} = useContext(AuthContext)

    return <button onClick={() => setIsAuthenticated(true)}>
        Login
    </button>
}

export default LoginButton;