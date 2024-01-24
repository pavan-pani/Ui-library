import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/NavBar/NavBar";
import Docs from "./components/Docs/Docs";
import HowToUse from "./components/How-to-use/HowToUse";
import Contact from "./components/contact/Contact";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/components" element={<Docs/>}/>
      <Route path="/how-to-use" element={<HowToUse/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    // <div>
    //  <Home/>
    // </div>
  );
}
export default App
