import VideoContainer from "./VideoContainer";
const MainContainer = () => {
  return (
    <>
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
        <VideoContainer />
      </div>
    </>
  );
};

export default MainContainer;
