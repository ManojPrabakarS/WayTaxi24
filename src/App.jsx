import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./Layout/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;