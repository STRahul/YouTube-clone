import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  const location = useLocation();
  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <SideBar />
        <div
          className={`overflow-x-hidden pb-4 ${
            isSidebarOpen ? "px-8" : "md:px-8"
          } ${location.pathname === "/watch" ? "w-[100vw]" : ""}`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
