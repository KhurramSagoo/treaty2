import "./App.css";
import Left from "./components/Left";
import Mix from "./components/Mix";
import Top from "./components/Top";
import Sample from "./components/sample";
import Sample2 from "./components/sample2";
import Center from "./components/Center";
import Center2 from "./Center2";
import "./Style/bootstrap-dist/css/bootstrap-reboot.min.css";
import SlidesCarousels from "./components/SlidesCarousels;";
import IconCard from "./components/IconCard";
import Icons from "./components/Icons";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Top />
      <SlidesCarousels />
      <Center2 />
      <Icons />
      <Left />
      <Footer />
    </>
  );
}

export default App;
