import React from "react";
import { useSelector } from "react-redux";
import { MoviesWrap } from "../styles/MoviesWrap";
import { MdOutlineFeaturedPlayList } from "react-icons/md";

function Movies() {
  const users = useSelector((state) => state.users);
  return (
    <div className="MoviesBox">
      <div className="container">
        <div className="row gy-2">
          {users.map((elem) => (
            <MoviesWrap
              className="col-md-6 col-xl-3 d-flex justify-content-center"
              key={elem.id}
            >
              <div className="text-white d-flex flex-column justify-content-between">
                <div>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}
                    alt="Movie Image"
                  />
                  <h1 className="title">{elem.title || elem.original_name}</h1>
                  <p className="subtitle">{elem.overview}</p>
                </div>
                <div>
                  <i className="release">
                    {elem.release_date || "Coming Soon..."}
                  </i>
                  <p>
                    {elem.vote_average} {elem.vote_count}
                  </p>
                  <button className="btn btn-primary">
                    Add to my wishlist <MdOutlineFeaturedPlayList />
                  </button>
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
