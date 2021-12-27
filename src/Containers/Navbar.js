import { Badge } from "@mui/material";
import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavbarWrap } from "../styles/NavbarWrap";

function Navbar() {
  const wishedMovies = useSelector((state) => state.wishedMovies);
  return (
    <NavbarWrap className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>
          <Link className="text-danger" to="/">
            ZETFLIX
          </Link>
        </h1>
        <nav>
          <ul className="m-0">
            <li>
              <Badge badgeContent={wishedMovies.length} color="success">
                <Link
                  to="/wishlist"
                  className="align-items-center btn btn-primary"
                >
                  <span>My Wishlist</span>
                  <span className="ms-2">
                    <RiShoppingCartLine />
                  </span>
                </Link>
              </Badge>
            </li>
          </ul>
        </nav>
      </div>
    </NavbarWrap>
  );
}

export default Navbar;
