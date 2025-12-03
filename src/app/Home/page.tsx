import React from "react";
import Hero from "../../components/Home/HeroSection";
import Mission from "../../components/Home/MissionSection";
import SupportFreeforCharity from "../../components/Home/SupportFreeforCharity";
import Testimonials from "../../components/Home/Testimonials";
import Ourblogs from "../../components/Home/Ourblogs";
import Contactus from "../../components/Home/Contactus";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Mission />
      <SupportFreeforCharity />
      <Testimonials />
      <Ourblogs />
      <Contactus />
    </div>
  );
};

export default Home;
