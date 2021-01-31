import React, { useEffect, useState } from "react";

const CustomerSatisfactionStock = ({ value = 74 }) => {
  const [computedValue, setComputedValue] = useState(value);
  const [
    descriptiveSatisfactionScore,
    setDescriptiveSatisfactionScore,
  ] = useState("Neutral");

  useEffect(() => {
    const calculateSatisfactionDescription = () => {
      if (computedValue < 25) {
        setDescriptiveSatisfactionScore("Very unhappy")
      } else if (computedValue < 50) {
        setDescriptiveSatisfactionScore("Unhappy")
      } else if (computedValue < 75) {
        setDescriptiveSatisfactionScore("Neutral")
      } else if (computedValue < 100) {
        setDescriptiveSatisfactionScore("Happy")
      } else {
        setDescriptiveSatisfactionScore("Ecstatic")
      }
    };

    const triggerGameOver = () => {
      console.log("Game over!")
    }

    const interval = setInterval(() => {
      if (computedValue === 0) {
        triggerGameOver()
        return
      }
      setComputedValue(computedValue - 1);
      calculateSatisfactionDescription(computedValue);
    }, 1000);
    return () => clearInterval(interval);
  }, [value, computedValue]);

  return (
    <button type="button" className="stock stock--customer-satisfaction" disabled>
      <h2>{descriptiveSatisfactionScore}</h2>
      <h3>Customer Satisfaction</h3>
      <p>How satisfied your customers are with your product</p>
      <small>{computedValue}</small>
    </button>
  );
};

export default CustomerSatisfactionStock;
