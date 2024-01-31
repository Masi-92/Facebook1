import { NavLink, Route } from "react-router-dom";
import style from "./layout.module.scss";

export const Layout = () => {
  const nav = [
    { name: "Home", to: "/Home" },
    { name: "Profile", to: "/Profile" },
    { name: "Sting", to: "/Sting" },
  ];

  return (
    <div>
      <header className={style.navbar}>
        <nav>
          <ul className={style.nav}>
            {nav.map((item, index) => {
              return (
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
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
};
