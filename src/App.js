import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getApiData } from "./Redux/actions";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";
import Wishlist from "./Pages/Wishlist";

function App() {
  useEffect(() => {
    getApiData();
  }, []);

  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
