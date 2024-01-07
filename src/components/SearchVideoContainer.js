import { Link, useSearchParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { SEARCH_API_URL } from "../utils/constants";
import SearchVideoCard from "./SearchVideoCard";
import Shimmer from "./Shimmer";
const SearchVideoContainer = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams?.get("search_query");
  const { data: videos, error } = useGetData(
    SEARCH_API_URL + searchQuery,
    searchQuery
  );

  if (videos?.length === 0 && !error) return <Shimmer search={true} />;
  else if (error)
    return (
      <p className="my-10 text-center text-3xl font-bold">
        Could not fetch Videos.
      </p>
    );
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
