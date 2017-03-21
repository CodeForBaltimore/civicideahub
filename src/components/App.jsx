import React from "react";
import CoreContent from '../components/corecontent.react.jsx';

import Header from "../components/header.react.jsx"

import style from "../style/app.css";




function App() {
  return (
    <div className={style.testing}>
      <Header />
      <CoreContent />
    </div>
  );
}
export default App;
