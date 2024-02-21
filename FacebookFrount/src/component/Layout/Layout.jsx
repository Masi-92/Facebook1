import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./layout.module.scss";
import { jwtDecode } from "jwt-decode";
import { SwipeableDrawer } from "@mui/material";

import StorageIcon from "@mui/icons-material/Storage";
export const Layout = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    right: false,
    logout:false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState((prevState) => ({ ...prevState, [anchor]: open }));
  };

  const HandleLogout = () => {
    localStorage.clear();
    navigate("/logout");
  };

  const HandleDrawer = () => {
    setState((prevState) => ({ ...prevState, right: true }));
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
    try {
      const decode = jwtDecode(token);
      const time = new Date().getTime();
      const exp = decode.exp * 1000;
      if (exp < time) {
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (error) {
      console.error("Token decoding failed:", error);
      navigate("/login");
    }
  }, [navigate]);


//_____________________________________________ anchor inhalte 


  const list = (anchor) => (
    <div>
      <div
        onClick={HandleLogout}
        style={{
          cursor: "pointer",
          color: "gray",
          borderBottom: "2px solid gray",
        }}
      >
        Logout
      </div>

      {anchor}
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
                  style={({ isActive }) => ({
                    color: isActive ? "#4db5ff" : "gray",
                    borderBottom: isActive ? "2px solid gray" : "none",
                  })}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <div
              onClick={HandleDrawer}
              style={{
                cursor: "pointer",
                border: "none",
                outline: "none",
              }}
            >
              <StorageIcon />
            </div>
          </ul>
        </nav>
      </header>
      <SwipeableDrawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        onOpen={toggleDrawer("right", true)}
      >
        {list("right")}
      </SwipeableDrawer>
    </div>
  );
};
