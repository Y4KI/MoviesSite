import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>
          <Link className="text-danger" to="/">
            ZETFLIX
          </Link>
        </h1>
        <ul className="m-0">
          <li>
            <Link to="/wishlist" className="align-items-center btn btn-primary">
              <span>My Wishlist</span>
              <span className="ms-2">
                <RiShoppingCartLine />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
