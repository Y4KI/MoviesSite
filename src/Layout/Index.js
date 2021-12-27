import React from "react";
import Navbar from "../Containers/Navbar";

function Layout(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

export default Layout;
