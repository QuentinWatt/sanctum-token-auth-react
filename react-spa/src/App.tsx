import { useState } from "react";
import AuthContext from "./contexts/AuthContext";
import LoginForm from "./components/login/LoginForm";
import Navigation from "./components/navigation/Navigation";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <Navigation />

      <div className="flex items-center justify-center">
        <div className="mx-auto px-3">
          {isAuthenticated ? (
            <div className="mt-5">You're logged in</div>
          ) : (
            <LoginForm />
          )}
        </div>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
