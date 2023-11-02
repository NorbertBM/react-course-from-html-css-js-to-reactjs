import { useState, createContext } from "react";

export const AuthenticationContext = createContext({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

export default function AuthenticationProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (email, password) => {
    if (email !== "admin" || password !== "admin") {
      console.log("Access denied !");
      return;
    }
    console.log("Access granted!");
    setIsAuthenticated(true);
  };
  const logout = () => {
    console.log("Logout");
    setIsAuthenticated(false);
  };

  return (
    <AuthenticationContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
