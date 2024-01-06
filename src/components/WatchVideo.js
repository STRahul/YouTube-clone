import { useSearchParams } from "react-router-dom";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("v");
  return (
    <div className="my-3 mx-5 p-3">
    <div className="flex flex-col lg:flex-row">
      <iframe
        className="rounded-xl aspect-video lg:w-[65%]"
        src={"https://www.youtube.com/embed/" + id + "?si=OQgS5SnpiT-2BHUQ"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen={true}
      ></iframe>
      <LiveChat />
    </div>
  </div>  )
}

export default WatchVideo