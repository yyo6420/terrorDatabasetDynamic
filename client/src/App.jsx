import { Routes, Route } from "react-router";
import "./styles/App.css";
import TerrorDataPage from "./pages/terrorDataPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TerrorDataPage />} />
        <Route path="/quiz" element={<h1>vdsvf</h1>} /> 
      </Routes>
    </>
  );
}

export default App;
