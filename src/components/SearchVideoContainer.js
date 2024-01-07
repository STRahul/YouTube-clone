import { Link, useSearchParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { SEARCH_API_URL } from "../utils/constants";
import SearchVideoCard from "./SearchVideoCard";
const SearchVideoContainer = () => {
  const [searchParams] =  useSearchParams();
  const searchQuery = searchParams?.get("search_query");
  const { data: videos } = useGetData(SEARCH_API_URL + searchQuery, searchQuery);
  return (
    <>
      {videos.map((video, i) => (
        <Link
          to={
            video.id.videoId === undefined ? "" : "/watch?v=" + video.id.videoId
          }
          key={i}
        >
          <SearchVideoCard info={video} />
        </Link>
      ))}
    </>
  );
};

export default SearchVideoContainer;