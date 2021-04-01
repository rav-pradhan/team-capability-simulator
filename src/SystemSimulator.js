import React, { useState } from 'react';
import CapabilityStock from "./components/CapabilityStock";
import ValueStock from "./components/ValueStock";
import CustomerSatisfactionStock from "./components/CustomerSatisfactionStock";

import infrastructureLevels from './domain/infrastructureLevels'
import valueStockMetadata from './domain/valueStockMetadata'

const SystemSimulator = () => {
  const [capabilityStock, setCapabilityStock] = useState(0);
  const [capabilityStockClickRequirement, setCapabilityStockClickRequirement] = useState(3)
  const [featureStock, setFeatureStock] = useState(0);
  const [requiredCapabilityForFeature, setRequiredCapabilityForFeature] = useState(4);
  const [infrastructureStock, setInfrastructureStock] = useState(0);
  const [requiredCapabilityForInfrastructure, setRequiredCapabilityForInfrastructure] = useState(infrastructureLevels[1]);
  const [customerSatisfactionStock, setCustomerSatisfactionStock] = useState(50);

  const featureStockLevelUpHandler = () => {
    if (capabilityStock >= requiredCapabilityForFeature) {
      handleStockAdjustments()
    }
  }

  const handleStockAdjustments = () => {
    setFeatureStock(featureStock + 1)
    setCapabilityStock(capabilityStock - requiredCapabilityForFeature);
    setRequiredCapabilityForFeature(Math.round(requiredCapabilityForFeature + (capabilityStockClickRequirement * 0.6)))
    runFeatureStockFeedbackLoopCalculations()
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
      handleInfrastructureStockAdjustments()
    }
  }

  const handleInfrastructureStockAdjustments = () => {
    setInfrastructureStock(infrastructureStock + 1)
    setCapabilityStock(capabilityStock - requiredCapabilityForInfrastructure);
    setRequiredCapabilityForInfrastructure(infrastructureLevels[infrastructureStock + 1])
    runInfrastructuretockFeedbackLoopCalculations()
  }

  const runInfrastructuretockFeedbackLoopCalculations = () => {
    const capabilityClickValue = capabilityStockClickRequirement - (infrastructureStock * 3) <= 1 ? 1 : Math.round(capabilityStockClickRequirement - (infrastructureStock * 3))
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
