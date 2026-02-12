import React from "react";
import Navbar from "../../components/Header/Navbar";
import Topbar from "../../components/Header/TopBar";
import HeroCarousel from "./partials/HeroCarousel";
import Cards from "./partials/Cards";
import FeaturedProducts from "./partials/FeaturedProducts";
import LookbookCountdown from "./partials/LookbookCountdown";

const Index = () => {
  return (
    <>
      <Topbar />    
      <Navbar />
      <HeroCarousel />
      <Cards />
      <FeaturedProducts />
      <LookbookCountdown />
    </>
  );
};

export default Index;