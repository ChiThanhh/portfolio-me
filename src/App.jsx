import React, { useEffect } from "react";
import Lenis from "lenis";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import FadeInSection from "./components/FadeInSection";

function App() {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
      direction: "vertical",
    });

    // Update Lenis on each frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup
    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0b192f] min-h-screen w-full">
      {/* <FadeInSection /> */}
      <Header />
      <Main />
    </div>
  );
}

export default App;
