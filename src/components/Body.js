import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <SideBar />
        <div
          className={`overflow-x-hidden pb-4`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
