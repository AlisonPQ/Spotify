import { createContext, useContext, useEffect, useState } from "react";
import { getTokenFromUrl } from "../api/auth";

interface AuthContextType {
  token: string | null;
  setToken: (token: string | null) => void;
}

const AuthContext = createContext<AuthContextType>({
  token: null,
  setToken: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check for token in localStorage
    const savedToken = localStorage.getItem("spotify_token");
    if (savedToken) {
      setToken(savedToken); 
    }

    // Check for token from URL (after the user logs in)
    const tokenFromUrl = getTokenFromUrl();
    if (tokenFromUrl) {
      setToken(tokenFromUrl);
      const expiryTime = Date.now() + 3600 * 1000; 
      // Store expiry time and token in localStorage
      localStorage.setItem("spotify_token", tokenFromUrl); 
      localStorage.setItem("token_expiry_time", expiryTime.toString()); 
      // Clear the URL
      window.history.pushState({}, "", "/"); 
    }
  }, []);

  useEffect(() => {
    if (token) {
      // Check expiration time and refresh if necessary
      const expiryTime = localStorage.getItem("token_expiry_time");
      const currentTime = Date.now();

      // Clear token from localStorage, If token expired
      if (expiryTime && currentTime > parseInt(expiryTime)) {
        localStorage.removeItem("spotify_token");
        localStorage.removeItem("token_expiry_time");
        setToken(null);
      }
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
