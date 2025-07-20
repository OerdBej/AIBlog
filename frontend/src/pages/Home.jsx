import React from "react";
import Navbar from "../components/Navbar";
import HeaderSection from "../components/HeaderSection";
import BlogList from "../components/BlogList";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeaderSection />
      <BlogList />
      <NewsLetter />
    </>
  );
};

export default Home;
