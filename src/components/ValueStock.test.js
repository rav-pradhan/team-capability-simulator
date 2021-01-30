import { render, screen } from "@testing-library/react";
import ValueStock from "./ValueStock";

describe("Value Stock - Feature", () => {
  test("that the component mounts and displays the Feature Stock name", () => {
    render(<ValueStock name={"Feature Stock"} />);
    const stockTitle = screen.getByText(/Feature Stock/i);
    expect(stockTitle).toBeInTheDocument();
  });

  test("that the component displays the current value of the Feature stock", () => {
    render(<ValueStock name={"Feature Stock"} currentValue={5} />);
    const valuePresentation = screen.getByText("Current value: 5");
    expect(valuePresentation).toBeInTheDocument();
  });

  test("that the component displays how many Capability Points is required to level up the value stock", () => {
    render(
      <ValueStock
        name={"Feature Stock"}
        currentValue={5}
        requiredCapability={3}
      />
    );
    const requiredCapabilityPresentation = screen.getByText(
      "3 Capability Points required to level up"
    );
    expect(requiredCapabilityPresentation).toBeInTheDocument();
  });

  test("that the component uses the correct stock class modifier - feature", () => {
    const { container } = render(
      <ValueStock
        name="feature"
        currentValue={5}
        requiredCapability={3}
        stockStyleModifier="feature"
      />
    );
    expect(container.getElementsByTagName("button")[0]).toHaveClass("stock--feature")
  });
});
