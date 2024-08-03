import React from "react";

export interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const defaultContextValue: AuthContextType = {
    isAuthenticated: false,
    setIsAuthenticated: () => {}
};

const AuthContext = React.createContext(defaultContextValue);

export default AuthContext