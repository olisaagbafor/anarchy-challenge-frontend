import React from "react";
import { Input, Textarea, IconButton } from "@material-tailwind/react";
import { useChatContext } from "../contexts/ChatProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

import axios from "axios";

function ConversationForm({ chat_id }) {
  const { chats, setChats, conversations, setConversations } = useChatContext();
  const { user, logout } = useAuth();
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addConversation = () => {
    axios
      .post(`${process.env.REACT_APP_API_BASEURL}/chats/${chat_id}/conversations`, { question }, { withCredentials: true })
      .then((res) => {
        setConversations([...conversations, res.data.data]);
        setQuestion(null);
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const createChat = () => {
    axios
      .post(`${process.env.REACT_APP_API_BASEURL}/users/${user?._id}/chats`, { question }, { withCredentials: true })
      .then((res) => {
        setChats([res.data.data, ...chats]);
        setQuestion("");
        navigate(`chat/${res.data.data._id}`);
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="fixed bg-gray-100 left-80 right-36 z-50 bottom-0 pt-6 pb-2">
      <form className="p-5 space-x-5 flex">
        <Textarea placeholder="Message ChatGPT..." resize={true} onChange={(e) => setQuestion(e.target.value)} disabled={loading} className={`relative min-h-full bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300 ${!loading && "animate-pulse"}`}>
          {question}
        </Textarea>

        <IconButton
          onClick={() => {
            chat_id ? addConversation() : createChat();
          }}
          disabled={!question || loading}
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 -rotate-45">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
          </svg>
        </IconButton>
      </form>
    </div>
  );
}

export default ConversationForm;
