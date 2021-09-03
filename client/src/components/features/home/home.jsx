import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>This is home</h1>
            <li>
                <NavLink to="/shop">SHOP</NavLink>
            </li>
            <li>
                <NavLink to="/room/0">Room 0</NavLink>
            </li>
            <li>
                <NavLink to="/room/1">Room 1</NavLink>
            </li>
            <li>
                <NavLink to="/room/2">Room 2</NavLink>
            </li>
            <li>
                <NavLink to="/room/3">Room 3</NavLink>
            </li>
        </div>
    );
};

export default Home;
