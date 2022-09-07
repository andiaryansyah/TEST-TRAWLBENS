import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../src/pages/Homepage/Homepage';
import DetailMovie from "./pages/DetailMovie/DetailMovie";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/detailmovie/:id" element={<DetailMovie />} />
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
