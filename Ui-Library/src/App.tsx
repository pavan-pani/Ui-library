import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("./components/Home/Home"))
const Docs = lazy(() => import("./components/Docs/Docs"))
const HowToUse = lazy(() => import("./components/How-to-use/HowToUse"))
const Contact = lazy(() => import("./components/contact/Contact"))


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/components" element={<Docs />} />
      <Route path="/how-to-use" element={<HowToUse />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
export default App
