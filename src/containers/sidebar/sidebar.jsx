import React from "react";
import "./sidebar.css";
import { BsArrowLeft } from "react-icons/bs";
import { SidebarData } from "./sidebarData";
import {VscGlobe} from "react-icons/vsc"
import { useState } from "react";
import ThemeToggler from "../../components/themeToggler/themeToggler";


export default function Sidebar() {
  // const theme = useContext(ContextTheme)[0];//default value
  // const currentTheme = AppTheme[theme];
  const [activeIndex, setActiveIndex] = useState(0);
  const clickItem = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="sidebar">
      <div className="sidebar-top-inside">
        <div className="sidebar-top">
          <div className="sidebar-top-left">
            <div className="avatar">N</div>
            <p className="top-text">Name</p>
          </div>
          <BsArrowLeft color="#fff" fontSize={"1.2rem"}/>
        </div>
        <div className="sidebar-middle">
          <ul className="sidebar-items">
            {SidebarData.map((item, index) => {
              return (
                <li
                  onClick={() => clickItem(index)}
                  key={index}
                  className={
                    index === activeIndex ? "active-item" : "sidebar-item"
                  }
                >
                  <span className={
                    index === activeIndex ? "active-icon" : "sidebar-item-icon"
                  }>{item.icon}</span>
                  {/* <span className="sidebar-item-icon">{item.icon}</span> */}
                  <span className="sidebar-item-title">{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-bottom-top">
          <button className="bottom-button-1">
            <span className="avatar2">N</span>
            <p>$0.90</p>
          </button>
          <button className="bottom-button-2">
            <p>Buy $XYZ</p>
          </button>
        </div>
        <div className="sidebar-bottom-bottom">
          <VscGlobe color="#808191" fontSize={"1.5rem"}/>
          <ThemeToggler/>
        </div>
      </div>
    </div>
  );
}
