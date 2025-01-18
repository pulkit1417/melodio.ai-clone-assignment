const CTA = () => {
  return (
    <>
      <div className="w-full max-w-4xl mx-auto relative overflow-hidden">
        <div className="px-3 md:px-6 lg:px-8 py-3 flex flex-col md:flex-row justify-between items-center gap-3 relative z-10">
          <div className="text-center md:text-left">
            <h2 className="text-white text-lg md:text-lg font-medium mb-1">
              Our beta version app is now available for download.
            </h2>
            <p className="text-gray-300 text-sm">
              Feel free to check it out and experience more features!
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href=""
            >
              <div className="flex items-center gap-2">
                <img
                  src="https://static-web.melodio.ai/static/png/ic-apple-OX7sOQJv.png"
                  alt="Apple Logo"
                    className="w-32 h-[50px]"
                />
              </div>
            </a>
            <a
              href=""
            >
              <div className="flex items-center gap-2">
                <img
                  src="https://static-web.melodio.ai/static/png/ic-google-Dm-vpZMl.png"
                  alt="Google Play Logo"
                  className="w-32 h-[50px]"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="relative min-h-[300px] flex mt-10 justify-center overflow-hidden">
        <div className="relative z-10 text-center px-4 md:px-8 lg:px-36">
          <h1 className="text-4xl md:text-6xl font-bold mb-2 bg-gradient-to-r from-purple-400 via-yellow-200 to-green-400 bg-clip-text text-transparent">
            Vibe Your Moment
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Endless stream of personalized music tailored to any scenario
          </p>
        </div>
      </div>
    </>
  );
};

export default CTA;
