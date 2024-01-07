import { Link, useSearchParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
const VideoContainer = () => {
  const [searchParams] = useSearchParams();
  const v = searchParams?.get("v");
  let url = API_URL;
  if (v !== null) {
    url = url + "&videoCategoryId=" + v;
  }
  const { data: videos } = useGetData(url, v);
  if (videos?.length === 0) return <Shimmer />;
  return (
    <>
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info={video} />
        </Link>
      ))}
    </>
  );
};

export default VideoContainer;
