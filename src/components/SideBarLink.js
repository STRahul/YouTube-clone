import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideBarLink = ({ isActive, Icon, label, to }) => {
  const isSidebarOpen = useSelector((store) => store.app.isSidebarOpen);

  return (
    <Link
      to={to}
      className={`flex items-center gap-3 my-3 py-2 rounded-md hover:bg-[rgba(0,0,0,0.12)] ${
        isActive && isSidebarOpen ? "font-bold bg-[rgba(0,0,0,0.05)]" : undefined
      } ${isSidebarOpen ? 'flex-row px-4' : 'flex-col px-7'}`}
    >
      <Icon className="w-7 h-7" />
      <li>{label}</li>
    </Link>
  );
};

export default SideBarLink;
