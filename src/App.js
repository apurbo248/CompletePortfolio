import logo from './logo.svg';
import './App.css';
import Header from './Components/Home/Header/Header';
import HeaderBody from './Components/Home/HeaderBody/HeaderBody';
import Skills from './Components/Home/Skills/Skills';
import Project from './Components/Home/Project/Project';
import Footer from './Components/Home/Footer/Footer';
import About from './Components/Home/About/About';
import Connect from './Components/Home/Connect/Connect';
import Blog from './Components/Home/Blog/Blog';

function App() {
  return (
    <div className="App">
    <Header></Header>
    <HeaderBody></HeaderBody>
    <About></About>
    <Skills></Skills>
    <Project></Project>
    <Blog></Blog>
    <Footer></Footer>
    </div>
  );
}

export default App;
