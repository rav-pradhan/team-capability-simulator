import React, { useState, useEffect } from 'react';


const CapabilityStock = ({value, numberOfClicksPerStockIncrease}) => {
    const [computedValue, setComputedValue] = useState(value);
    const [clickCount, setClickCount] = useState(0)

    const incrementClickCount = () => {
        setClickCount(clickCount + 1)
    }

    useEffect(() => {
        if (clickCount === numberOfClicksPerStockIncrease) {
            setClickCount(0);
            setComputedValue(computedValue + 1)
        }
    }, [computedValue, clickCount, numberOfClicksPerStockIncrease])

    return (
        <button type="button" className="stock" onClick={incrementClickCount}>
            <h2>Capability Stock</h2>
            <p>The amount of 'resource' you have to work on things</p>
            <h3>Current value: {computedValue}</h3>
            <p>Cost: {numberOfClicksPerStockIncrease} clicks per capability increase</p>
        </button>
    )
}

export default CapabilityStock;