import React from "react";
import { Input, Textarea, IconButton } from "@material-tailwind/react";
import { useChatContext } from "../contexts/ChatProvider";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { toast } from "react-toastify";

import axios from "axios";

function ConversationForm() {
  const { user, logout } = useAuth();
  const { chats, setChats, activeChat, setActiveChat, conversations, setConversations } = useChatContext();
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const createChat = () => {
    axios
      .post(`${process.env.REACT_APP_API_BASEURL}/users/${user?._id}/chats`, { question }, { withCredentials: true })
      .then((res) => {
        setChats([res.data.data, ...chats]);
        setActiveChat(res.data.data);
        setConversations(res.data.data.conversations);
      })
      .catch((err) => {
        if (err.response) {
          toast.error(err.response.data.error);
        }
      })
      .finally(() => setLoading(false));
  };
  return (
    <form>
      <Textarea onChange={(e) => setQuestion(e.target.value)} className="relative" placeholder="Message ChatGPT"></Textarea>
      <div className="absolute right-52 bottom-10">
        <IconButton onClick={() => createChat()} variant="text">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
          </svg>
        </IconButton>
      </div>

      <p className="text-sm text-gray-700 text-center mt-2">ChatGPT can make mistakes. Consider checking important information.</p>
    </form>
  );
}

export default ConversationForm;
