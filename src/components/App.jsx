import React from "react";
import CoreContent from '../components/corecontent.react.jsx';

import Header from "../components/header.react.jsx";
import Footer from '../components/footer.react.jsx';

import style from "../style/app.css";




function App() {
  return (
    <div className={style.base}>
      <Header />
     <CoreContent />
      <Footer />
    </div>
  );
}
export default App;

   // <CoreContent />
