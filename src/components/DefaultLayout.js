import { Outlet } from "react-router-dom";
import SideBar from "../components/SideBar";

const DefaultLayout = () => {
  return (
    <div>
      <div className="md:grid grid-cols-12 gap-0 h-screen w-full">
        <div className="col-span-2 bg-black">
          <SideBar />
        </div>
        <div className="col-span-10 bg-gray-100 md:p-5 w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
