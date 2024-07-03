import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeSidebar } from "../store/appSlice";
import { COMMENTS_API_URL } from "../utils/constants";
import LiveChat from "./LiveChat";
import useGetData from "../hooks/useGetData";
import CommentContainer from "./CommentContainer";
import ChannelData from "./ChannelData";
import VideoContainer from './VideoContainer';
const WatchVideo = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  const dispatch = useDispatch();

  const { data: comments, error } = useGetData(COMMENTS_API_URL + id, "");

  useEffect(() => {
    dispatch(closeSidebar());
  }, [dispatch]);

  return (
    <div className="my-3 mx-5 p-3">
      <div className="flex gap-2 flex-col lg:flex-row">
        <div className="aspect-video lg:w-[70%]">
          <iframe
            className="rounded-xl aspect-video w-full"
            src={
              "https://www.youtube.com/embed/" +
              id +
              "?si=OQgS5SnpiT-2BHUQ&autoplay=1&mute=0"
            }
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}></iframe>
          <ChannelData videoId={id} />
          <div className="hidden lg:block">
            <CommentContainer comments={comments} error={error} />
          </div>
        </div>
        <div className="w-full lg:w-[35%]">
          <LiveChat />
          <VideoContainer />
        </div>
      </div>
    </div>
  );
};

export default WatchVideo;
