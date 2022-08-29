import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from '../src/pages/Homepage/Homepage';
import DetailMovie from "./pages/DetailMovie/DetailMovie";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/detailmovie/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
