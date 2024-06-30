"use client"
import { DragHandle } from "@mui/icons-material";
import { useState } from "react";

const Sizeable_Panel = ({ defaultDrawerWidth, height = 30 }) => {
  const [drawerWidth, setDrawerWidth] = useState(defaultDrawerWidth ?? 200);
  // console.log("drawer width is ", drawerWidth + "px");
  const handlemousedown = () => {
    document.body.addEventListener("");
  };
  return (
    <div style={{ height: height, display:"flex"}}>
      <div
        style={{
          backgroundColor: "orange",
          width: drawerWidth + "px",
          height: "100%",
        }}
      ></div>
      <div
        style={{height: "100%", width: "10px", backgroundColor: "blue" }}
        // draggable
        draggable
        onDrag={() => {
          // console.log("dragging ....");
        }}
      ></div>
    </div>
  );
};

export default Sizeable_Panel;
