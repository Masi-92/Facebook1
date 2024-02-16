import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./layout.module.scss";
import { jwtDecode } from "jwt-decode";
import { SwipeableDrawer, Button } from '@mui/material';

export const Layout = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const HandleLogout = () => {
    localStorage.clear();
    navigate("/logout");
  };
  const HandleDrawer = () => {
    
    navigate("/drawer");
  };

  const nav = [
    { name: "Home", to: "/Home" },
    { name: "Profile", to: "/Profile" },
    { name: "Sting", to: "/Sting" },
  ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }
    const decode = jwtDecode(token);
    const time = new Date().getTime();
    const exp = decode.exp * 1000;
    if (exp < time) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  }, [navigate]);

  const list = (anchor) => (
    <div>
      {nav.map((item, index) => (
        <NavLink key={index} to={item.to} onClick={toggleDrawer(anchor, false)}>
          {item.name}
        </NavLink>
      ))}
    </div>
  );

  return (
    <div>
      <header className={style.navbar}>
        <nav>
          <ul className={style.nav}>
            {nav.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.to}
                  onClick={item.onClick}
                  style={({ isActive }) => ({
                    color: isActive ? "#4db5ff" : "gray",
                    borderBottom: isActive ? "2px solid gray" : "none",
                  })}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <div
                onClick={HandleLogout}
                style={{
                  color: "gray",
                  borderBottom: "2px solid gray",
                }}
              >
           logout
            
              </div>
              
            </li>
            <li><div
              onClick={HandleDrawer}
              style={{
                color: "gray",
                borderBottom: "2px solid gray",
              }}>
              <button>menu </button>
              </div></li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
