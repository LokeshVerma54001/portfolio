import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="relative z-10 h-screen w-screen text-white">
      <Header />
      <Hero />
      {/* <About /> */}
      <Contact />
    </div>
  );
}
