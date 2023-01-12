import React from "react";
import Navmenu from "./components/common/Navbar";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Quote from "./components/Qoute";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <div>
      <Landing />
      <Navmenu />
      <Services />
      <ContactUs />
      <Testimonial />
      <Quote />
      <Footer />
    </div>
  );
};

export default App;
