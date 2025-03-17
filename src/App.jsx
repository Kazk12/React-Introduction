// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Time from "./components/Time/Time";
import Welcome from "./components/Welcome/Welcome";

// firstName et lastName = props

function App() {

  return (
    <main>
      <Welcome firstName="Tsukiyo" lastName="Power" />
     <Time />
    </main>
  );
}

export default App;
