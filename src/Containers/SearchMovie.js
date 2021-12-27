import { Button, TextField } from "@mui/material";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { SearchMovieWrap } from "../styles/SearchMovieWrap";

function SearchMovie() {
  return (
    <SearchMovieWrap className="container">
      <form className="d-flexs">
        <div className="input-group mb-3">
          <button className="input-group-text" id="inputGroup-sizing-default">
            <BsSearch />
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Search for movies here!"
            onChange={(e) => {
              console.log(e.target.value);
            }}
          />
        </div>
      </form>
    </SearchMovieWrap>
  );
}

export default SearchMovie;
