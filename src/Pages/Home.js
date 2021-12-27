import React from "react";
import Movies from "../Containers/Movies";
import SearchMovie from "../Containers/SearchMovie";
import Layout from "../Layout/Index";

function Home() {
  return (
    <Layout>
      <SearchMovie />
      <Movies />
    </Layout>
  );
}

export default Home;
