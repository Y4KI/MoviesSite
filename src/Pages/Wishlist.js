import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout/Index";
import { MoviesWrap } from "../styles/MoviesWrap";

function Wishlist() {
  const wishedMovies = useSelector((state) => state.wishedMovies);
  return (
    <Layout>
      <div className="container">
        <div className="row gy-2">
          {(wishedMovies.length > 0 &&
            wishedMovies.map((elem) => (
              <MoviesWrap
                className="col-md-6 col-xl-3 d-flex justify-content-center"
                key={elem.id}
              >
                <div className="text-white d-flex flex-column justify-content-between">
                  <div>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}
                      alt="Movie_Image"
                    />
                    <h1 className="title">
                      {elem.title || elem.original_name}
                    </h1>
                    <p className="subtitle">{elem.overview}</p>
                  </div>
                  <div>
                    <i className="release">
                      {elem.release_date || "Coming Soon..."}
                    </i>
                    <p>
                      {elem.vote_average} {elem.vote_count}
                    </p>
                    <button className="btn btn-success w-100 my-1">
                      Watch Movie
                    </button>
                  </div>
                </div>
              </MoviesWrap>
            ))) || (
            <h1 className="text-white text-center ">No any Movies yet...</h1>
          )}
        </div>
      </div>
    </Layout>
  );
}

export default Wishlist;
