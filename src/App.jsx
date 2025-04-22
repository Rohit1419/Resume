import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import VJTIResume from "./pages/VJTIResume";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Resume />} />
          <Route path="/vjti-resume" element={<VJTIResume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
