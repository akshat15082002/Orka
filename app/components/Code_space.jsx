"use client"
//todo: done server functions
import "./question_page.css";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import Code_Page from "./Code_Page";
import Blank from "./DOT";
import { useRef } from "react";

const Code_space = ({ submit_to_API }) => {
  const panel_div = useRef();

  return (
    <div>
      <div style={{border: "2px solid", height:"100%"}}>
        <PanelGroup direction="horizontal">
          <Panel defaultSize={40} collapsible={true} minSize={20} style={{backgroundColor:"white",color:"black"}}>
            QUESTION
          </Panel>
          <PanelResizeHandle
            onDragging={(dragging)=>{
            panel_div.current.classList.toggle("panel_div_hover");
            }}
            tagName="div">
            <div
            ref = {panel_div}
            id = "panel_div"
            style={{width:"11px",height:"100%",backgroundColor:"whitesmoke" ,display:"flex", flexDirection:"column", gap:"3px",justifyContent:"center",alignItems:"center"}}>
              <Blank/>
              </div></PanelResizeHandle>
          <Panel minSize={30}
          defaultSize={60}>
            <div>
              <Code_Page submit_to_API={submit_to_API}/>
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </div>
  );

};

export default Code_space;
