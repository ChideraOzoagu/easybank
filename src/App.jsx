import { useEffect, useRef, useState } from "react";
import "./index.scss";

// components
import Header from "./components/Header";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Blog from "./components/Blog";
import Footer from "./components/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import {TweenMax, Power3} from gsap;
// gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <>
      <Header />
      <Intro />
      <Main />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
