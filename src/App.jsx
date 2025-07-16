import "./App.css";
import { Routes, Route } from "react-router-dom";
import { HomePage, ShowroomPage } from "./pages/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/showroom" element={<ShowroomPage />} />
      </Routes>
    </>
  );
}

export default App;
