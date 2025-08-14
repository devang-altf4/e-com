import { Routes, Route } from "react-router-dom";
import Home from "./app/home";
import Checkout from "./components/Checkout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout/:productId" element={<Checkout />} />
    </Routes>
  );
}

export default App;

