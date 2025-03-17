import React from "react"; // C'est optionnel
import './Welcome.css'
import Click from "../Click";

function Welcome({ firstName, lastName }) {
  return (
    <section>
      <h1 className="blue">
        Welcome {firstName} {lastName} !
      </h1>
      <Click />
    </section>
  );
}

export default Welcome;
