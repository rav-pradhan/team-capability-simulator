import './App.css';
import CapabilityStock from './components/CapabilityStock'
import ValueStock from './components/ValueStock'

function App() {
  return (
    <div className="App">
      <h1>Software Teams Capability Simulator</h1>
      <main className="flow-layout">
        <ValueStock name="Feature Stock" currentValue={5} requiredCapability={3} stockStyleModifier="feature" />
        <CapabilityStock value={5} numberOfClicksPerStockIncrease={3} />
        <CapabilityStock />
        <CapabilityStock />
      </main>
    </div>
  );
}

export default App;
