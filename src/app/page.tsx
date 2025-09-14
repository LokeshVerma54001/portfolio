import Header from "./components/Header";
import Hero from "./components/Hero";
import SpaceshipHUD from "./components/SpaceshipHUD";
import StatusHUD from "./components/StatusHUD";

export default function Home() {
  return (
    <div className="relative z-10 h-screen w-screen text-white">
      <Header />
      <Hero />
      <SpaceshipHUD />
      <StatusHUD />
    </div>
  );
}
