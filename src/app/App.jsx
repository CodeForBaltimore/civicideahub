import React from "react";
import CoreContent from '../components/CoreContent/corecontent.react.jsx';

import Header from "../components/header/header.react.jsx"

import style from "./style.css";

function App() {
  return (
    <div className={style.testing}>
      <Header />    
      <CoreContent />
    </div>
  );
}
export default App;
