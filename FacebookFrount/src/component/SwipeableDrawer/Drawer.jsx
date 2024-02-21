import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

const Drawer = () => {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div>
      {/* Hier können Sie den Inhalt für den Drawer definieren */}
      {/* Zum Beispiel: */}
      <p>Drawer-Inhalt für {anchor}</p>
    </div>
  );

  return (
<div>
  {["right"].map((anchor) => (
    <React.Fragment key={anchor}>
      <Button onClick={() => toggleDrawer(anchor, true)}>Open Right Drawer</Button>
    </React.Fragment>
  ))}
</div>
  );
};

export default Drawer;
