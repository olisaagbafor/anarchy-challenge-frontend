import { Input, Textarea, IconButton } from "@material-tailwind/react";
import React from "react";
import NewChat from "./NewChat";

const Home = () => {
  return (
    <div className="h-screen overflow-y-auto">
      <NewChat />
    </div>
  );
};

export default Home;
