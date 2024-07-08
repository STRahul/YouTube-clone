import { Link, useLocation, useSearchParams } from "react-router-dom";
import useGetData from "../hooks/useGetData";
import { API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";
import { useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../store/appSlice";
import parse from 'html-react-parser';

const VideoContainer = ({classes}) => {
  const [searchParams] = useSearchParams();
  const categoryId = useSelector(state => state.app.categoryId)
  const dispatch = useDispatch();
  const location = useLocation();
  const v = searchParams?.get("v");
  let url = API_URL;
  let dependency = '';
  if (v !== null && location.pathname !== '/watch') {
    url = url + "&videoCategoryId=" + v;
    dependency = v;
  }
  else if(categoryId !== 'all'){
    url = url + "&videoCategoryId=" + categoryId;
    dependency = categoryId;
  }
  const { data: videos, error } = useGetData(url, dependency);


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
      <p className={`[&>a]:text-blue-700 mx-auto my-8 text-center font-bold ${classes}`}>
       {parse(error?.message) || "Could not fetch Videos."}
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
