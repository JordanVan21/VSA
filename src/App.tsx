import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function pathToLabel(pathname: string) {
  switch (pathname) {
    case "/":
      return "Home";
    case "/products":
      return "Products";
    case "/about":
      return "About";
    case "/contact":
      return "Contact";
    default:
      return "";
  }
}

function App() {
  const location = useLocation();
  const [activeNav, setActiveNav] = useState(pathToLabel(location.pathname));

  // keep activeNav in sync whenever the URL changes
  useEffect(() => {
    setActiveNav(pathToLabel(location.pathname));
  }, [location.pathname]);

  return (
    <div className="body">
      <Header onNavClick={setActiveNav} activeLabel={activeNav} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
