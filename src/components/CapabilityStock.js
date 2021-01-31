import React, { useState, useEffect } from 'react';


const CapabilityStock = ({value = 0, numberOfClicksPerStockIncrease = 1, capabilityStockHandler}) => {
    const [computedValue, setComputedValue] = useState(value);
    const [clickCount, setClickCount] = useState(0)

    const incrementClickCount = () => {
        setClickCount(clickCount + 1)
    }

    useEffect(() => {
        setComputedValue(value);
    }, [value])

    useEffect(() => {
        if (clickCount === numberOfClicksPerStockIncrease) {
            setClickCount(0);
            setComputedValue(computedValue + 1)
            capabilityStockHandler(this)
        }
    }, [computedValue, clickCount, numberOfClicksPerStockIncrease, capabilityStockHandler])

    const renderClickDifferentialText = () => {
        const differenceBetweenCurrentAndRequiredClicks = numberOfClicksPerStockIncrease - clickCount
        const clickGrammarText = differenceBetweenCurrentAndRequiredClicks > 1 ? "clicks" : "click"
        return `${differenceBetweenCurrentAndRequiredClicks} ${clickGrammarText} until Capability Point (CP) generated`
    }

    return (
        <button type="button" className="stock stock--capability" onClick={incrementClickCount}>
            <h2>{computedValue}</h2>
            <h3>Capability Stock</h3>
            <p>The amount of 'resource' you have to work on things</p>
            <p><strong>{renderClickDifferentialText()}</strong></p>
        </button>
    )
}

export default CapabilityStock;