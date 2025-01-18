import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="pt-[60px] md:pt-[60px] lg:pt-[65px]">
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;