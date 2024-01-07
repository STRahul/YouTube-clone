import React, { useState, useEffect, useRef } from "react";
import { ArrowLeft, Menu, Mic, Search, User } from "lucide-react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/appSlice";
import { SUGGESSION_API_URL } from "../utils/constants";
import { saveCaches } from "../store/searchSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const [suggessions, setSuggessions] = useState([]);
  const [showSuggession, setShowSuggession] = useState(false);
  const timeout = useRef();
  const searchCaches = useSelector((store) => store.search);
  const dispatch  = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCaches[searchQuery]) {
        setSuggessions(searchCaches[searchQuery]);
      } else {
        getSuggessions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  async function getSuggessions() {
    const response = await fetch(SUGGESSION_API_URL + searchQuery);
    const data = await response.json();
    setSuggessions(data[1]);
    if (data[1].length === 0) {
      return null;
    }
    dispatch(
      saveCaches({
        [searchQuery]: data[1],
      })
    );
  }

  function searchHandler(data){
    clearTimeout(timeout.current);
    setShowSuggession(false);
    if(data.trim().length === 0){
      return;
    }
    let query = data.replace(/\s+/g, "-");
    navigate("/result?search_query=" + query);  }

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4">
      <PageHeaderFirstSection hidden={showFullWidthSearch} />
      <form
        onSubmit={(e) => e.preventDefault()}
        className={` gap-4 flex-grow justify-center ${
          showFullWidthSearch ? "flex" : "hidden md:flex"
        }`}
      >
        {showFullWidthSearch && (
          <Button
            onClick={() => setShowFullWidthSearch(false)}
            type="button"
            size="icon"
            variant="ghost"
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}

        <div className="flex flex-grow max-w-[600px] relative">
        {showSuggession && <Search className="absolute mx-3 my-2.5" />}
          <input
            type="search"
            name="search"
            placeholder="Search"
            className={`rounded-l-full border border-secondary-border shadow-inner shadow-secondary py-1 text-lg font-medium w-full focus:border-blue-500 outline-none ${showSuggession?'px-12':'px-4'}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => {
              clearTimeout(timeout.current);
              setShowSuggession(true);
            }}
            onBlur={() => {
              timeout.current = setTimeout(() => {
                setShowSuggession(false);
              }, 250)
            }}
          />
          <Button className="py-2 px-4 rounded-r-full border-secondary-border border border-l-0 flex-shrink-0" onClick={()=>searchHandler(searchQuery)}>
            <Search />
          </Button>
          {suggessions.length > 0 && showSuggession && (
            <div
              className="absolute w-[90%] mt-11 bg-white rounded-xl m-1 py-3 border z-50"
              id="suggession"
            >
              <ul>
                {suggessions.map((item) => (
                  <li
                    className="flex gap-3 px-9 py-1 hover:bg-gray-200 font-medium text-lg"
                    key={item}
                    onClick={() => {
                      setSearchQuery(item);
                      searchHandler(item);
                    }}
                  >
                    <Search />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </form>

      <div
        className={`flex-shrink-0 md:gap-2 ${
          showFullWidthSearch ? "hidden" : "flex"
        }`}
      >
        <Button
          onClick={() => setShowFullWidthSearch(true)}
          size="icon"
          variant="ghost"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
          <Mic />
        </Button>
        <Button size="icon" variant="ghost">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default Header;

export function PageHeaderFirstSection({ hidden = false }) {
  const dispatch = useDispatch();
  return (
    <div
      className={` gap-4 items-center flex-shrink-0 ${
        hidden ? "hidden" : "flex"
      }`}
    >
      <Button
        variant="ghost"
        size="icon"
        className="outline-transparent"
        onClick={() => dispatch(toggleSidebar())}
      >
        <Menu />
      </Button>
      <a href="/" className="flex gap-1 justify-center items-center">
        <svg
          className="h-6"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 576 512"
          fill="red"
        >
          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
        </svg>
        <span className="font-bold text-lg">YouTube</span>
      </a>
    </div>
  );
}
