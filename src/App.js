import React,{useState} from "react";
import ContextTheme from "./context/contextTheme";
import "./App.css";
import Main from "./containers/index";

function App() {
const themeHook = useState("dark")
  return (
    <ContextTheme.Provider value={themeHook}>
    <div className="app">
      <Main />
    </div>
    </ContextTheme.Provider>
  );
}

export default App;
