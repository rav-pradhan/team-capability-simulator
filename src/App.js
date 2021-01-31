import { useState } from "react";
import "./App.css";
import SimulatorOverview from "./SimulatorOverview";
import SystemSimulator from "./SystemSimulator";

const App = () => {
  const [displayingOverview, setDisplayingOverview] = useState(false);

  const displayOverviewText = () => {
    return (
      <main className="overview">
        <SimulatorOverview />
        <button type="button" onClick={() => setDisplayingOverview(false)}>Let's play!</button>
      </main>
    );
  };
  return (
    <div className="App">
      <h1>Software Teams Capability Simulator</h1>
      {displayingOverview ? displayOverviewText() : <SystemSimulator />}
    </div>
  );
};

export default App;
