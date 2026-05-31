import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/navbar";

import Main from "./public/mainpage";
import Services from "./public/services";
import About from "./public/about";
import Portfolio from "./public/portfolio";
import Testimonials from "./public/testmonials";
import Contact from "./public/contact";
import Footer from "./public/footer";

const App = () => {
  return (
    <Router>
      <Navbar />

      <section id="home">
        <Main />
      </section>

      <section id="services">
        <Services />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="portfolio">
        <Portfolio />
      </section>

      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </Router>
  );
};

export default App;