import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Home/Header/Header";
import HeaderBody from "./Components/Home/HeaderBody/HeaderBody";
import Skills from "./Components/Home/Skills/Skills";
import Project from "./Components/Home/Project/Project";
import Footer from "./Components/Home/Footer/Footer";
import About from "./Components/Home/About/About";
import Connect from "./Components/Home/Connect/Connect";
import Blog from "./Components/Home/Blog/Blog";

function App() {
  return (
    <div classNameName="App">
      <Header />
      <Routes>
        <Route path="/" exact element={<HeaderBody />} />
        <Route path="/Portfolio/Home" element={<HeaderBody />} />
        <Route path="/Portfolio/About" element={<About />} />
        <Route path="/Portfolio/Contact" element={<Connect />} />
        <Route path="/Portfolio/Projects" element={<Project />} />
        <Route path="/Portfolio/Blogs" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
