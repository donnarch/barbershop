import Hero from "../components/Hero";
import Services from "../components/Services";
import BarberNote from "../components/BarberNote";
import Barbers from "../components/Barbers";
import Booking from "../components/Booking";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <BarberNote />
      <Services />
      <Barbers />
      <Booking />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
}
