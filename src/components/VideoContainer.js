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
  const { data: videos, error } = useGetData(url, v);
  if (videos?.length === 0 && !error) return <Shimmer />;
  else if(error){
    return <p className="mx-auto my-8 w-[80vw] text-center text-3xl font-bold">Could not fetch Videos.</p>
  }
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
