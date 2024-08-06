import React, { useContext } from "react";
import AuthContext from "../../contexts/AuthContext";

const LoginForm: React.FC = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  return (
    <form className="mt-5" onSubmit={() => setIsAuthenticated(true)}>
      <h1 className="font-bold text-2xl mb-3">Login</h1>

      <div className="mb-3">
        <input type="text" className="max-w-md" />
      </div>

      <div className="mb-3">
        <input type="password" className="max-w-md" />
      </div>

      <div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-full w-32"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
