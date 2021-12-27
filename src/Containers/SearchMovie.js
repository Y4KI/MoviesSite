import React from "react";
import { BsSearch } from "react-icons/bs";
import { searchMovie } from "../Redux/actions";
import { SearchMovieWrap } from "../styles/SearchMovieWrap";

function SearchMovie() {
  return (
    <SearchMovieWrap className="container">
      <form
        className="d-flexs"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search for movies here!"
            onChange={(e) => searchMovie(e.target.value)}
          />
          <button className="input-group-text" id="inputGroup-sizing-default">
            <BsSearch />
          </button>
        </div>
      </form>
    </SearchMovieWrap>
  );
}

export default SearchMovie;
