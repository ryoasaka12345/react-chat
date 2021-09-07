import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>This is home</h2>
      <NavLink to="/chat">Go Market</NavLink>
    </div>
  );
};

export default Home;
