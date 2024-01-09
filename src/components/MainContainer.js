import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
const MainContainer = () => {
  return (
    <>
     <div className="sticky top-0 bg-white z-10 pb-4">
        <ButtonList />
      </div>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        <VideoContainer />
      </div>
    </>
  );
};

export default MainContainer;
