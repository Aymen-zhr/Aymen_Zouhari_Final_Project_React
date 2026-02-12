import React from "react";
import Navbar from "../../components/Header/Navbar";
import Topbar from "../../components/Header/TopBar";
import HeroCarousel from "./partials/HeroCarousel";

const Index = () => {
  return (
    <>
      <Topbar />    
      <Navbar />
      <HeroCarousel />
    </>
  );
};

export default Index;