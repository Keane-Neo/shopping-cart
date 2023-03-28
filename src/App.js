import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
