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
      <form className=" p-10">
        <Textarea
          onChange={(e) => setQuestion(e.target.value)}
          className="relative min-h-full !border-0 focus:border-transparent"
          rows={1}
          resize={true}
          containerProps={{
            className: "grid h-full",
          }}
          labelProps={{
            className: "before:content-none after:content-none",
          }}
          placeholder="Message ChatGPT"
        />
        <div className="absolute z-50 right-14  bottom-32">
          <IconButton
            onClick={() => {
              chat_id ? addConversation() : createChat();
            }}
            variant="text"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5" />
            </svg>
          </IconButton>
        </div>
        <p className="text-sm text-gray-700 text-center mt-2">ChatGPT can make mistakes. Consider checking important information.</p>
      </form>
    </div>
  );
}

export default ConversationForm;
