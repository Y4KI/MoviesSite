import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Movies from "./Containers/Movies";
import Navbar from "./Containers/Navbar";
import { getApiData } from "./Redux/actions";

function App() {
  useEffect(() => {
    getApiData();
  }, []);

  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className="App">
      <Navbar />
      <Movies />
    </div>
  );
}

export default App;
