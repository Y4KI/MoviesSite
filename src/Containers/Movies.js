import React from "react";
import { useSelector } from "react-redux";
import { MoviesWrap } from "../styles/MoviesWrap";
import { getWishMovies, watchMovie } from "../Redux/actions";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill, BsPlus, BsEye } from "react-icons/bs";

function Movies() {
  const movies = useSelector((state) => state.movies);

  return (
    <div className="MoviesBox">
      <div className="container">
        <div className="row gy-2">
          {movies.length > 0 &&
            movies.map((elem, index) => (
              <MoviesWrap
                className="col-md-6 col-xl-3 d-flex justify-content-center"
                key={elem.id}
              >
                <div className="Img_block">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}
                    alt="Movie_picture"
                  />
                  <div className="absolute_block d-flex flex-column justify-content-between">
                    <div>
                      <div className="release">
                        <span className="country">
                          {elem.original_language.toUpperCase()}
                        </span>
                        <span className="date">{elem.release_date}</span>
                      </div>
                      <h1 className="title">
                        {elem.title || elem.original_name}
                      </h1>
                      <div className="details d-flex justify-content-between align-items-center">
                        <div>
                          <span className="logo">YAKI</span>
                          <span className="average">
                            {elem.vote_average}/10
                          </span>
                        </div>
                        <div>
                          <span>
                            {Math.floor(elem.popularity)} <BsEye />
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <Link
                        className="watch"
                        to={"/watch/" + elem.id}
                        onClick={() => watchMovie(elem.id)}
                      >
                        Watch Movie
                        <span className="plus">
                          <BsPlus />
                        </span>
                      </Link>
                      <button
                        className="wishlist"
                        onClick={() => getWishMovies(index)}
                      >
                        <BsFillBookmarkFill />
                      </button>
                    </div>
                  </div>
                </div>
              </MoviesWrap>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Movies;
