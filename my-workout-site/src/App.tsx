import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Home from "@/pages/Home";
import AppInfo from "@/pages/AppInfo";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";

const App: React.FC = () => {
  const location = useLocation();
  return (
    <div className="app">
      <Header />
      <div className="pageContainer">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<AppInfo />} /> */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/app" element={<AppInfo />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Footer />
    </div>
  );
};

export default App;
