import React from "react";
import Navbar from "../../components/Header/Navbar";
import Topbar from "../../components/Header/TopBar";
import HeroCarousel from "./partials/HeroCarousel";
import Cards from "./partials/Cards";
import FeaturedProducts from "./partials/FeaturedProducts";
import LookbookCountdown from "./partials/LookbookCountdown";
import OurBlog from "./partials/OurBlog";

const Index = () => {
  return (
    <>
      <Topbar />    
      <Navbar />
      <HeroCarousel />
      <Cards />
      <FeaturedProducts />
      <LookbookCountdown />
      <OurBlog />
    </>
  );
};

export default Index;