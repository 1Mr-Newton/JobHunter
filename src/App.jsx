import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import FindJob from "./components/FindJob";
function App() {
  return (
    <div className="w-full h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
        <Route path="/findjobs" element={<FindJob />} />
      </Routes>
      <footer className="w-full bg-green-500 h-[50rem]"></footer>
    </div>
  );
}
export default App;
