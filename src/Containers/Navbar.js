import React from "react";

function Navbar() {
  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="text-danger">ZETFLIX</h1>
        <ul>
          <li>
            <a href="/">My Wishlist</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
