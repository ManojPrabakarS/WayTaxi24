import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Loading from './Components/Loading'
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Service from "./pages/Services/Service";
import Contact from "./pages/Contact/Contact";
import ErrorPage from "./pages/Error/ErrorPage";

import ScrollToTop from "./Service/ScrollToTop";
export default function App() {

const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}