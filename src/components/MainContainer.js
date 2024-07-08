import { useSearchParams } from "react-router-dom";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const MainContainer = () => {
  const [searchParams] = useSearchParams();
  const v = searchParams?.get("v");
  return (
    <>
      {v === null && <div className="sticky top-0 bg-white z-10 pb-4">
        <ButtonList />
      </div>}
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        <VideoContainer classes="md:w-[85vw] md:text-2xl" />
      </div>
    </>
  );
};

export default MainContainer;
