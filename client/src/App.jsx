import "./App.css";
import MainComp from "./components/MainComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainComp />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );

  // return <MainComp />;
}

export default App;
