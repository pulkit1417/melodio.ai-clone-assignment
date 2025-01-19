import Button from "./Button";

const PModify = () => {
  return (
    <div className="relative min-h-screen p-8 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 relative h-[600px]">
          <div className="relative w-full h-full mt-16">
            <img
              src="https://static-web.melodio.ai/static/png/image-2-1x-CZo-mUgw.png"
              alt="group image"
            ></img>
          </div>
        </div>
        <div className="flex-1 text-white space-y-6">
          <h1 className="text-5xl lg:text-5xl font-bold leading-tight">
            Play and Modify On The Go
          </h1>

          <p className="text-base lg:text-lg text-gray-300 max-w-xl">
            Seamlessly adapts to any command, ensuring your music perfectly
            reflects your present state.
          </p>

          <Button onClick={() => console.log("clicked")}>
            Download APP
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PModify;
