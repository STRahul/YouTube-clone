import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { FaTrophy } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaper } from "react-icons/io5";

const API_KEY = process.env.REACT_APP_API_KEY;
export const CHAT_LENGTH = 20;
export const API_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  API_KEY;
export const SUGGESSION_API_URL =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const SEARCH_API_URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
  API_KEY +
  "&q=";
export const COMMENTS_API_URL =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  API_KEY +
  "&maxResults=100&videoId=";

export const CATEGORIES = [
  "All",
  "JavaScript",
  "TypeScript",
  "Programming",
  "Travelling",
  "Cricket World Cup 2023",
  "Bowling",
  "Cricket",
  "React",
  "Next.js",
  "UI/UX Design",
  "Object Oriented Programming",
  "Frontend Web Development",
  "Backend Web Development",
  "Web Development",
  "Coding",
];

export const sidebarLinkData = [
  {
    Icon: IoMdHome,
    label: "Home",
    to: "/",
    v: null
  },
  {
    Icon: SiYoutubeshorts,
    label: "Shorts",
    to: "/?v=1",
    v: '1'
  },
  {
    Icon: FaTrophy,
    label: "Sports",
    to: "/?v=17",
    v: '17'
  },
  {
    Icon: IoMdMusicalNote,
    label: "Music",
    to: "/?v=10",
    v: '10'
  },
  {
    Icon: SiYoutubegaming,
    label: "Gaming",
    to: "/?v=20",
    v: '20'
  },
  {
    Icon: IoNewspaper,
    label: "News",
    to: "/?v=25",
    v: '25'
  },
];
