import React,{useContext} from "react";
import ContextTheme from "../context/contextTheme";
import AppTheme from "../containers/appTheme"
import Sidebar from "./sidebar/sidebar";
import Middle from "./middle/middle";
import Right from "./right/right";
import "./index.css";

export default function Main() {
  const theme = useContext(ContextTheme)[0];//default value
  const currentTheme = AppTheme[theme];
  return (
    <div className="container" style={{backgroundColor:`${currentTheme.backgroundColor}`,color:`${currentTheme.textColor}`}}>
      <div className="banner">
        <p className="banner-text">
          Lorem Ipsum is simply dummy text of printing
        </p>
      </div>
      <div className="main">
        <Sidebar />
        <Middle />
        <Right />
      </div>
    </div>
  );
}
