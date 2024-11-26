import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutUs from "./Components/AboutUs";
import Menu from "./Components/Menu";
import ReservationForm from "./Components/ReservationForm";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Menu />
      <ReservationForm />
      <Footer />
    </div>
  );
};

export default App;
