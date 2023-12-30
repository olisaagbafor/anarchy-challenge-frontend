import { NavLink } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { Menu, MenuHandler, MenuList, MenuItem, IconButton, Radio, Button, Dialog, DialogHeader, DialogBody, DialogFooter } from "@material-tailwind/react";
function Icon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-full w-full scale-105">
      <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
    </svg>
  );
}

const SideBar = () => {
  const auth = useAuth();
  const { user, logout } = auth;

  return (
    <div className="relative">
      <Button variant="text" fullWidth className="logo flex border-b border-gray-900 rounded-none justify-between">
        <div className="flex justify-start gap-x-5">
          <img src={require("../assets/favicon.png")} />
          <div className="capitalize mt-2 text-white">New Chat</div>
        </div>
        <div className="mt-2 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
          </svg>
        </div>
      </Button>

      <div className="mt-7">
        <p className="text-gray-700 mb-3 text-sm font-semibold md:ml-5">Previous 30 Days</p>
      </div>
      <div className="overflow-y-auto h-white h-full w-full text-white">
        <Button fullWidth className="pr-1 text-left">
          <NavLink className={"capitalize text-white text-sm"}>No Overlapping types</NavLink>
          <div className="absolute right-5 top-3.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg>
          </div>
        </Button>
      </div>

      <div className="question-previous-months h-auto fixed bottom-0">
        <div className=" w-full mt-5">
          <Menu placement="top-end">
            <MenuHandler>
              <Button variant="text" className="text-white flex justify-start gap-x-3 text-left relative capitalize" fullWidth>
                <div>
                  <img className="w-9 rounded-lg" src={user?.picture} />
                </div>
                <div className="text-white text-sm mt-1.5">{user?.display_name}</div>
              </Button>
            </MenuHandler>
            <MenuList>
              <MenuItem> Custom Instructions</MenuItem>
              <MenuItem> Settings</MenuItem>
              <MenuItem onClick={logout}> Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
