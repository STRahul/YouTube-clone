import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnline from "../hooks/useOnline";

const Body = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  const location = useLocation();
  const isOnline = useOnline();
  let content = (
    <div className="flex items-center ml-[30rem] mt-60">
      <h1 className="font-bold text-2xl">
        OFFLINE!! Please check your internet connection😥
      </h1>
    </div>
  );

  if (isOnline) {
    content = (
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
    );
  }

  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      {content}
    </div>
  );
};

export default Body;
