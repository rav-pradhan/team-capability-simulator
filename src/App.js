import './App.css';
import CapabilityStock from './components/CapabilityStock'

function App() {
  return (
    <div className="App">
      <h1>Software Teams Capability Simulator</h1>
      <main className="flow-layout">
        <CapabilityStock value={5} numberOfClicksPerStockIncrease={3} />
        <CapabilityStock />
        <CapabilityStock />
        <CapabilityStock />
      </main>
    </div>
  );
}

export default App;
