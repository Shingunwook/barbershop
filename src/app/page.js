import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Barbers from "../components/Barbers";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About/>
      <Services/>
      <Barbers/>
      <Gallery/>
    </>
  );
}