import { useSelector } from "react-redux"


const SideBar = () => {
  const isSidebarOpen = useSelector(store=>store.app.isSidebarOpen)
  return (
      <div>
   {isSidebarOpen && <div className="shadow-lg h-full z-50 w-40 bg-white">
      <ul className="py-4 px-3 md:px-7">
       <li>Home</li>
       <li>Short</li>
      </ul>
    </div>}
    </div>
  );
};

export default SideBar;
