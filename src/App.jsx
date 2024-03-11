import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Sponsors from "./pages/Sponsors/Sponsors";
import NoPage from "./pages/404Page/404page";
import Register from "./pages/Register/Register";
import AboutUs from "./pages/AboutUs/AboutUs";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="bg-bground min-h-screen">
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      
      <Footer />
    </div>
  );
};

export default App;
