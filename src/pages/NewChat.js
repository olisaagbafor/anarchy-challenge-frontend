import { Input, Textarea, IconButton } from "@material-tailwind/react";
import React from "react";
import logo from "../assets/logo.svg";
import ConversationForm from "../components/ConversationForm";

const NewChat = () => {
  return (
    <div className="px-10 h-screen overflow-y-auto">
      <div className="w-fit mx-auto md:mt-32">
        <img src={logo} className="w-16 mx-auto" />
        <p className="text-2xl text-left">How can I help you today?</p>
      </div>

      <div className="md:w-4/5 mx-auto mt-14">
        <div className="md:grid grid-cols-12 gap-4">
          <div className="border border-gray-300 rounded-lg p-3 col-span-6">
            <p className="text-xl font-semibold">Tell me a fun fact</p>
            <p>about the Roman empire</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-3 col-span-6">
            <p className="text-xl font-semibold">Brainstorm names</p>
            <p>for an orange cat, we are adopting from the shelter</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-3 col-span-6">
            <p className="text-xl font-semibold">Write a thank-you note</p>
            <p>To a guess speaker for my class</p>
          </div>
          <div className="border border-gray-300 rounded-lg p-3 col-span-6">
            <p className="text-xl font-semibold">Recommend a dish</p>
            <p>To bring to a potluck</p>
          </div>
          <ConversationForm />
        </div>
      </div>
    </div>
  );
};

export default NewChat;
