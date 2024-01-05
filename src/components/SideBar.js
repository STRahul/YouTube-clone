import { useSelector } from "react-redux"


const SideBar = () => {
  const isSidebarOpen = useSelector(store=>store.app.isSidebarOpen)
  return (
   isSidebarOpen && <div className="shadow-lg h-full z-50 w-24 absolute bg-white">
      <ul className="py-4 px-3 md:px-7">
       <li>Home</li>
       <li>Short</li>
      </ul>
    </div>
  );
};

export default SideBar;
