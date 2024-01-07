import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useSearchParams } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import SideBarLink from "./SideBarLink";
import { FaTrophy } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";

const SideBar = () => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);
  const [params] = useSearchParams();
  const location = useLocation();
  const v = params?.get("v");
  let classses = "shadow-lg h-full z-50";
  if (isSidebarOpen) {
    classses +=
      ` w-40 md:w-64 absolute bg-white ${location.pathname!=='/watch'?'md:relative':''}`
  } else {
    classses += ` w-20 md:w-24 ${location.pathname==='/watch'?'hidden':''}`;
  }

  return (
    <div className={classses}>
      <ul className="py-4 px-3 md:px-7">
        <SideBarLink
          isActive={v === null}
          Icon={IoMdHome}
          label="Home"
          to={"/"}
        />
        <SideBarLink
          isActive={v === "1"}
          Icon={SiYoutubeshorts}
          label="Shorts"
          to={"/?v=1"}
        />
        <SideBarLink
          isActive={v === "17"}
          Icon={FaTrophy}
          label="Sports"
          to={"/?v=17"}
        />
        <SideBarLink
          isActive={v === "10"}
          Icon={IoMdMusicalNote}
          label="Music"
          to={"/?v=10"}
        />
        <SideBarLink
          isActive={v === "20"}
          Icon={SiYoutubegaming}
          label="Gaming"
          to={"/?v=20"}
        />
      </ul>
    </div>
  );
};

export default SideBar;
