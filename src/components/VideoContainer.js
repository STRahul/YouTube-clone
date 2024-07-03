import { Link, useLocation, useSearchParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSidebar } from "../store/appSlice";

const VideoContainer = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const v = searchParams?.get("v");
  let url = API_URL;
  if (v !== null && location.pathname !== '/watch') {
    url = url + "&videoCategoryId=" + v;
  }
  const { data: videos, error } = useGetData(url, v, true);


  useLayoutEffect(() => {

    function handleResize() {
      if (window.innerWidth < 1200) {
        dispatch(closeSidebar());
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);
  

  if (videos?.length === 0 && !error) return <Shimmer />;
  else if (error) {
    return (
      <p className="mx-auto my-8 text-center text-3xl font-bold">
        Could not fetch Videos.
      </p>
    );
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
