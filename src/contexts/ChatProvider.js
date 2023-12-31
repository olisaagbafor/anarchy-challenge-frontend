import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { toast } from "react-toastify";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const auth = useAuth();
  const { user } = auth;
  const [chats, setChats] = useState([]);
  const [activeChat, setActiveChat] = useState({});
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_BASEURL}/users/${user?._id}/chats`, { withCredentials: true })
      .then((res) => setChats(res.data.data))
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.error);
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return <ChatContext.Provider value={{ chats, setChats, loading, activeChat, setActiveChat, conversations, setConversations }}>{children}</ChatContext.Provider>;
};

export const useChatContext = () => {
  return useContext(ChatContext);
};
