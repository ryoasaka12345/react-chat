import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <li>
                <NavLink to="/room">Room</NavLink>
            </li>
        </div>
    );
};

export default Home;
