import { Link } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { API_URL } from "../utils/constants"
import VideoCard from "./VideoCard";
const VideoContainer = () => {
 const {data: videos} = useGetData(API_URL);

  return (
    <>
    {videos.map((video) => (
      <Link to={"/watch?v=" + video.id} key={video.id}>
        <VideoCard info={video} />
      </Link>
    ))}
  </>  )
}

export default VideoContainer