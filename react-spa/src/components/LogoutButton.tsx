import React, { useContext } from "react"
import AuthContext from "../contexts/AuthContext";

const LogoutButton: React.FC = () => {
    const {setIsAuthenticated} = useContext(AuthContext)

    return <button onClick={() => setIsAuthenticated(false)}>
        Logout
    </button>
}

export default LogoutButton;