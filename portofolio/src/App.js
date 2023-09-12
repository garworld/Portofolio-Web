import "./App.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import QuestionPage from "./pages/QuestionPage";
import Navbar from "./components/Navbar";

AOS.init();

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>,
          <Route path="/contact" element={<QuestionPage />}></Route>,
        </Routes>
      </div>
    </>
  );
}

export default App;
