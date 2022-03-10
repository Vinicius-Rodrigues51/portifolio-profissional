import Header from "./components/Header";
import "./App.css";
import Home from "./components/Home";
import React from "react";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <React.Fragment>
      <Header />
      {/* <MobileNav /> */}
      <Home />
      <About />
      <Education />
      <Projects />
      <Footer />
    </React.Fragment>
  );
}

export default App;
