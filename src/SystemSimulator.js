import CapabilityStock from "./components/CapabilityStock";
import ValueStock from "./components/ValueStock";
import CustomerSatisfactionStock from "./components/CustomerSatisfactionStock";

const valueStockMetadata = {
  feature: {
    name: "Feature Stock",
    description: "The amount of value-adding features in your software",
    styleModifier: "feature",
  },
  infrastructure: {
    name: "Infrastructure Stock",
    description:
      "The robustness and resilience of your platform infrastructure and developer workflows",
    styleModifier: "infrastructure",
  },
};

const SystemSimulator = () => {
  return (
    <main className="flow-layout">
      <ValueStock
        {...valueStockMetadata["feature"]}
        currentValue={5}
        requiredCapability={3}
      />
      <CapabilityStock value={5} numberOfClicksPerStockIncrease={3} />
      <ValueStock
        {...valueStockMetadata["infrastructure"]}
        currentValue={0}
        requiredCapability={3}
      />
      <CustomerSatisfactionStock value={74} />
    </main>
  );
};

export default SystemSimulator;
