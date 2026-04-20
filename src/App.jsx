import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Homepage sections
import Hero from "./components/Hero";
import BarberNote from "./components/BarberNote";
import About from "./components/About"; // homepage section
import Services from "./components/Services";
import Barbers from "./components/Barbers";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

// Full pages
import AboutPage from "./pages/AboutPage";
import ShopPage from "./pages/ShopPage";
import BlogPage from "./pages/BlogPage";
import FAQPage from "./pages/FAQPage";
import CareersPage from "./pages/CareersPage";

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <BarberNote />
      <Services />
      <Barbers />
      <Booking />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/journal" element={<BlogPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
