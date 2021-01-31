import React, { useState } from 'react';
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

const infrastructureLevels = {
  1: 30,
  2: 80,
  3: 150,
  4: 200,
}

const SystemSimulator = () => {
  const [capabilityStock, setCapabilityStock] = useState(10);
  const [capabilityStockClickRequirement, setCapabilityStockClickRequirement] = useState(3)
  const [featureStock, setFeatureStock] = useState(0);
  const [requiredCapabilityForFeature, setRequiredCapabilityForFeature] = useState(10);
  const [infrastructureStock, setInfrastructureStock] = useState(0);
  const [requiredCapabilityForInfrastructure, setRequiredCapabilityForInfrastructure] = useState(infrastructureLevels[1]);
  const [customerSatisfactionStock, setCustomerSatisfactionStock] = useState(55);

  const featureStockLevelUpHandler = () => {
    if (capabilityStock >= requiredCapabilityForFeature) {
      setFeatureStock(featureStock + 1)
      setCapabilityStock(capabilityStock - requiredCapabilityForFeature);
      setRequiredCapabilityForFeature(Math.round(requiredCapabilityForFeature + (capabilityStockClickRequirement * 0.6)))
      runFeatureStockFeedbackLoopCalculations()
    }
  }

  const runFeatureStockFeedbackLoopCalculations = () => {
    setCapabilityStockClickRequirement(Math.round(capabilityStockClickRequirement + (featureStock * 1.8)));
    setCustomerSatisfactionStock(customerSatisfactionStock + 10);
  }

  const capabilityStockLevelUpHandler = () => {
    setCapabilityStock(capabilityStock + 1)
  }

  const infrastructureStockLevelUpHandler = () => {
    if (capabilityStock >= requiredCapabilityForFeature) {
      setInfrastructureStock(infrastructureStock + 1)
      setCapabilityStock(capabilityStock - requiredCapabilityForInfrastructure);
      setRequiredCapabilityForInfrastructure(infrastructureLevels[infrastructureStock + 1])
      runInfrastructuretockFeedbackLoopCalculations()
    }
  }

  const runInfrastructuretockFeedbackLoopCalculations = () => {
    const capabilityClickValue =capabilityStockClickRequirement - (infrastructureStock * 3) <= 1 ? 1 : Math.round(capabilityStockClickRequirement - (infrastructureStock * 3))
    setCapabilityStockClickRequirement(capabilityClickValue);
    setRequiredCapabilityForFeature(Math.round(requiredCapabilityForFeature * 0.66))
    setCustomerSatisfactionStock(customerSatisfactionStock + 5);
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
        levelUpHandler={infrastructureStockLevelUpHandler}
      />
    </main>
  );
};

export default SystemSimulator;
