import React from "react";

import "./App.css";
import CurrencyRow from "./components/CurrencyRow";

function App() {
  return (
    <>
      <div className="app-container">
        <h1>Convert</h1>
        <CurrencyRow></CurrencyRow>
        <div className="equals">=</div>
        <CurrencyRow></CurrencyRow>
      </div>
    </>
  );
}

export default App;
