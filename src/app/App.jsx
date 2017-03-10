import React from "react";

import StatelessTemplate from '../components/templates/statelesstemplate/stateless.react.jsx';
import StatefulTemplate from '../components/templates/StatefulTemplate/Stateful.react.jsx';

import style from "./style.css";

function App() {
  return (
    <div className={style.testing}>
      <StatelessTemplate />
      <StatefulTemplate />
      <h1>Civic Idea Hub</h1>
      <p>Edit App.jsx to start creating your app</p>
      <h1>Civic Idea Hub</h1>
      <p>Edit App.jsx to start creating your app buddy</p>
    </div>
  );
}
export default App;
