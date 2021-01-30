const ValueStock = ({name = "", currentValue = 0, requiredCapability = 1, styleModifier = "capability", description = ""}) => {

  const pluraliseCapabilityPoints = () => {
    return requiredCapability > 1 ? "Capability Points" : "Capability Point"
  }

  return (
    <button type="button" className={`stock stock--${styleModifier}`}>
      <h2>{currentValue}</h2>
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>{requiredCapability} {pluraliseCapabilityPoints()} required to level up</strong></p>
    </button>
  )
}

export default ValueStock;