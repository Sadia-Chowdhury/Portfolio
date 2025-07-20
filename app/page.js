'use client';

import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import About from "./Components/About"
import Services from "./Components/Services";
import Projects from "./Components/Projects";

export default function Home() {
  return (
   <>
   <Navbar/>
   <Header />
   <About />
   <Services />
   <Projects />
   </>
  );
}
