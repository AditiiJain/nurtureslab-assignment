import React,{useContext} from "react";
import ContextTheme from "../../context/contextTheme";
import {BsFillSunFill,BsFillMoonStarsFill} from "react-icons/bs"
import "./themeToggler.css"
const ThemeToggler = () => {
    const [themeMode, setThemeMode] = useContext(ContextTheme);
    const moonStyles = { color: "#808191" };
    const sunStyles = { color: "#808191" };
    return (
      <span>
        <input
          type="checkbox"
          className="checkbox"
          id="checkbox"
          onClick={() => {
            setThemeMode(themeMode === "light" ? "dark" : "light");
          }}
        />
        <label for="checkbox" className="label">
        <BsFillMoonStarsFill style={moonStyles} />
          <BsFillSunFill style={sunStyles} />
         
          <div className="ball"></div>
        </label>
      </span>
    );
}

export default ThemeToggler
