import { Route, Routes } from "react-router-dom";
import Constant from "./pages/Constant";
import Linear from "./pages/Linear";
import Quadratic from "./pages/Quadratic";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import Quasilinear from "./pages/Quasilinear";
import Logarithmic from "./pages/Logarithmic";
import Exponential from "./pages/Exponential";
import Factorial from "./pages/Factorial";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/introduction" element={<Introduction />} />
      <Route path="/constant" element={<Constant />} />
      <Route path="/linear" element={<Linear />} />
      <Route path="/quadratic" element={<Quadratic />} />
      <Route path="/logarithmic" element={<Logarithmic />} />
      <Route path="/quasilinear" element={<Quasilinear />} />
      <Route path="/exponential" element={<Exponential />} />
      <Route path="/factorial" element={<Factorial />} />
    </Routes>
  );
}

export default App;
