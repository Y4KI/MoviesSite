import React from "react";
import Movies from "../Containers/Movies";
import Navbar from "../Containers/Navbar";
import SearchMovie from "../Containers/SearchMovie";

function Home() {
  return (
    <>
      <Navbar />
      <SearchMovie />
      <Movies />
    </>
  );
}

export default Home;
