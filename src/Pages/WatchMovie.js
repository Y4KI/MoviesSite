import React from "react";
import { useSelector } from "react-redux";
import Layout from "../Layout/Index";
import { WatchMovieWrap } from "../styles/WatchMovieWrap";

function WatchMovie() {
  const movie = useSelector((state) => state.selectedMovie);
  return (
    <Layout>
      <WatchMovieWrap className="container">
        {(JSON.stringify(movie) !== JSON.stringify({}) && (
          <div className="d-flex text-white">
            <div className="left">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt="Movie"
              />
              <h1>{movie.title}</h1>
              <p>
                popularity {movie.popularity} - language{" "}
                {movie.original_language}
              </p>
            </div>
            <div className="right">
              <p>{movie.overview}</p>
              <i>{movie.release_date}</i>``
              <p>
                <span>{movie.vote_average}</span> -{" "}
                <span>{movie.vote_count}</span>
              </p>
            </div>
          </div>
        )) || <h1 className="text-white text-center">No Any movie yet...</h1>}
      </WatchMovieWrap>
    </Layout>
  );
}

export default WatchMovie;
