import { NavLink, useNavigate } from "react-router-dom";
import style from "./layout.module.scss";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const Layout = () => {
  const navigate = useNavigate();
  const HandleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  const nav = [
    { name: "Home", to: "/Home" },
    { name: "Profile", to: "/Profile" },
    { name: "Sting", to: "/Sting" },
    //{ name: "Logout", onClick: HandleLogout },
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
      //localStorage.clear() so wird alle DEL
      // removeItem() just one clear
      localStorage.removeItem("token");

      navigate("/login");
    }
  }, []);
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
                    onClick={item.onClick}
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
            <li>
              <div
                onClick={HandleLogout}
                style={{
                  color: "gray",
                  borderBottom: "2px solid gray",
                }}
              >
                login
              </div>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

// {(['left', 'right', 'top', 'bottom'] as const).map((anchor) => (
//   <React.Fragment key={anchor}>
//     <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
//     <SwipeableDrawer
//       anchor={anchor}
//       open={state[anchor]}
//       onClose={toggleDrawer(anchor, false)}
//       onOpen={toggleDrawer(anchor, true)}
//     >
//       {list(anchor)}
//     </SwipeableDrawer>
//   </React.Fragment>
// ))}
