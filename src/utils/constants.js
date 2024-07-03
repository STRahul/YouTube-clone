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
 "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="
  //"https://corsproxy.org/?https%3A%2F%2Fsuggestqueries.google.com%2Fcomplete%2Fsearch%3Fclient%3Dfirefox%26ds%3Dyt%26q%3D";
export const SEARCH_API_URL =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" +
  API_KEY +
  "&q=";
export const COMMENTS_API_URL =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&key=" +
  API_KEY +
  "&maxResults=100&videoId=";
  export const CHANNEL_INFO_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&key=" + API_KEY

  export const VIDEO_DETAILS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
    API_KEY;

  export const VIDEO_CATEGORY_API = "https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=IN&key=" + API_KEY;

  export const VIDEOS_ID_API = "https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&maxResults=100&key=" + API_KEY + "&videoCategoryId=";


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
