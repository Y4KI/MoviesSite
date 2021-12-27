import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout/Index";

function Wishlist() {
  const wishedMovies = useSelector((state) => state.wishedMovies);
  return (
    <Layout>
      <div className="container">
        {(wishedMovies.length > 0 &&
          wishedMovies.map((elem) => (
            <div>
              <h1>{elem.title}</h1>
            </div>
          ))) || (
          <h1 className="text-white text-center ">No any Movies yet...</h1>
        )}
      </div>
    </Layout>
  );
}

export default Wishlist;
