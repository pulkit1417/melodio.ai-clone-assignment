import Button from "./Button";

const PMusic = () => {
  return (
    <div className="relative p-8 overflow-hidden -mt-36">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-white space-y-6">
          <h1 className="text-5xl max-w-6xl lg:text-5xl font-bold leading-tight">
            Personalized Music Streams
          </h1>

          <p className="text-sm lg:text-lg text-gray-300 max-w-xl">
            Melodio AI instantly responds to your mood or setting, creating an
            endless stream of perfect ambient music. It adapts in real-time,
            ensuring your environment always has the ideal soundtrack.
          </p>

          <Button onClick={() => console.log("clicked")}>Download APP</Button>
        </div>
        <div className="flex-1">
          <div className="relative">
            <div className="absolute -inset-4 rounded-lg transform rotate-6"></div>
            <img
              src="https://static-web.melodio.ai/static/png/image-1-1x-CmZhO6ag.png"
              alt="DJ Mixer in purple lighting"
              className="relative rounded-lg w-full shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PMusic;
