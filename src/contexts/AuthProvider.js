import { useState, useContext, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const login = async ({ user }) => {
    setUser(user);
    toast.success(`Welcome ${user.display_name}`);
  };

  const logout = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASEURL}/auth/logout`, { withCredentials: true })
      .then((res) => {})
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.error);
        }
      })
      .finally(() => setUser(null));
    navigate("/welcome");
  };

  const getUser = () => {
    axios
      .get(`${process.env.REACT_APP_API_BASEURL}/auth/me`, { withCredentials: true })
      .then((res) => {
        setUser(res.data.data);
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.error);
        }
        logout();
      });
  };

  return <AuthContext.Provider value={{ user, login, logout, getUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
