import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants"
import VideoCard from "./VideoCard";
const VideoContainer = () => {
 const [videos, setVideos] = useState([]);
  useEffect(()=>{
    getVideos()
  },[])
  async function getVideos(){
    const response = await fetch(API_URL);
    const data = await response.json();
    setVideos(data?.items);
  }
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