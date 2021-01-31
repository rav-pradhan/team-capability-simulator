import React, { useState, useEffect } from 'react';
import CapabilityStock from "./components/CapabilityStock";
import ValueStock from "./components/ValueStock";
import CustomerSatisfactionStock from "./components/CustomerSatisfactionStock";

const valueStockMetadata = {
  feature: {
    name: "Feature",
    description: "The amount of value-adding features in your software",
    styleModifier: "feature",
  },
  infrastructure: {
    name: "Infrastructure",
    description:
      "The maturity of your infrastructure, team collaboration, removing tech debt etc.",
    styleModifier: "infrastructure",
  },
};

const SystemSimulator = () => {
  const [capabilityStock, setCapabilityStock] = useState(10);
  const [capabilityStockClickRequirement, setCapabilityStockClickRequirement] = useState(1)
  const [featureStock, setFeatureStock] = useState(0);
  const [requiredCapabilityForFeature, setRequiredCapabilityForFeature] = useState(10);
  const [infrastructureStock, setInfrastructureStock] = useState(0);
  const [requiredCapabilityForInfrastructure, setRequiredCapabilityForInfrastructure] = useState(50);
  const [customerSatisfactionStock, setCustomerSatisfactionStock] = useState(74);

  const featureStockLevelUpHandler = () => {
    if (capabilityStock >= requiredCapabilityForFeature) {
      setFeatureStock(featureStock + 1)
      setCapabilityStock(capabilityStock - requiredCapabilityForFeature);
      runFeatureStockFeedbackLoopCalculations()
    }
  }

  const runFeatureStockFeedbackLoopCalculations = () => {
    setCapabilityStockClickRequirement(Math.round(capabilityStockClickRequirement + (featureStock * 1.8)));
    setCustomerSatisfactionStock(customerSatisfactionStock + 10);
  }

  const capabilityStockLevelUpHandler = (event) => {
    setCapabilityStock(capabilityStock + 1)
  }

  return (
    <main className="flow-layout">
      <CustomerSatisfactionStock key="customer-satisfaction" value={customerSatisfactionStock} />
      <ValueStock
        key="feature"
        {...valueStockMetadata["feature"]}
        currentValue={featureStock}
        requiredCapability={requiredCapabilityForFeature}
        levelUpHandler={featureStockLevelUpHandler}
      />
      <CapabilityStock key="capability" value={capabilityStock} 
                       numberOfClicksPerStockIncrease={capabilityStockClickRequirement} 
                       capabilityStockHandler={capabilityStockLevelUpHandler} />
      <ValueStock
        key="infrastructure"
        {...valueStockMetadata["infrastructure"]}
        currentValue={infrastructureStock}
        requiredCapability={requiredCapabilityForInfrastructure}
      />
    </main>
  );
};

export default SystemSimulator;
