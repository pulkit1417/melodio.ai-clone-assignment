import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black px-4 md:px-8 lg:px-36 py-3 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="flex items-center">
        <div className="flex items-center gap-2">
          <Link to="/">
            <img
              className="w-[100px] md:w-[120px] lg:w-[150px] h-auto md:h-[35px] lg:h-[42px]"
              src="https://static-web.melodio.ai/static/png/logo-3x-bF8HqprK.png"
              alt="melodio.ai"
            />
          </Link>
        </div>
      </div>
      <button className="bg-[#c6f37c] hover:bg-[#9adb39] text-black px-4 md:px-6 py-2 rounded-full font-medium transition-colors text-sm md:text-base">
        Sign Up
      </button>
    </nav>
  );
};

export default Navbar;