import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";
import LogoutButton from "../LogoutButton";

const Navigation: React.FC = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <nav className="bg-blue-300 border-b-2 border-blue-400 h-12 flex items-center">
      <div className="container mx-auto px-3 flex justify-between">
        <div>Logo</div>
        <div>{isAuthenticated && <LogoutButton />}</div>
      </div>
    </nav>
  );
};

export default Navigation;
