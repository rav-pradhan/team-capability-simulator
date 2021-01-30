const ValueStock = ({name = "", currentValue = 0, requiredCapability = 1, stockStyleModifier = "capability"}) => {

  const pluraliseCapabilityPoints = () => {
    return requiredCapability > 1 ? "Capability Points" : "Capability Point"
  }

  return (
    <button type="button" className={`stock stock--${stockStyleModifier}`}>
      <h1>{name}</h1>
      <p>Current value: {currentValue}</p>
      <p>{requiredCapability} {pluraliseCapabilityPoints()} required to level up</p>
    </button>
  )
}

export default ValueStock;