import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import SideBarLink from "./SideBarLink";
import { sidebarLinkData } from "../utils/constants";
const SideBar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  const [params] = useSearchParams();
  const location = useLocation();
  const v = params?.get("v");
  let classses = "shadow-lg h-full z-50";
  if (isSidebarOpen) {
    classses += ` w-40 md:w-64 absolute bg-white ${
      location.pathname !== "/watch" ? "md:relative" : ""
    }`;
  } else {
    classses += ` w-20 md:w-24 ${
      location.pathname === "/watch" ? "hidden" : ""
    }`;
  }

  return (
    <div className={classses}>
      <ul className="py-4 px-3 md:px-7">
        {sidebarLinkData.map((item) => (
          <SideBarLink
            isActive={item.v === v}
            Icon={item.Icon}
            label={item.label}
            to={item.to}
          />
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
