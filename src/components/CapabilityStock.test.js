import { render, fireEvent, screen } from "@testing-library/react";

import CapabilityStock from "./CapabilityStock";

describe("Capability Stock", () => {
  test("that the component mounts", () => {
    render(<CapabilityStock />);
    const stockTitle = screen.getByText(/Capability Stock/i);
    expect(stockTitle).toBeInTheDocument();
  });

  test("that the capability stock value is rendered", () => {
    render(<CapabilityStock value={5} />);
    const value = screen.getByText(/5/);
    expect(value).toBeInTheDocument();
  });

  test("that the capability stock value increments on click", () => {
    render(<CapabilityStock value={2} numberOfClicksPerStockIncrease={1} capabilityStockHandler={jest.fn()} />);
    fireEvent.click(screen.getByText(/Capability Stock/i));
    const value = screen.getByText(/3/);
    expect(value).toBeInTheDocument();
  });

  test("that the capability stock value increments when it reaches click threshold", () => {
    render(<CapabilityStock value={10} numberOfClicksPerStockIncrease={3} capabilityStockHandler={jest.fn()} />);
    fireEvent.click(screen.getByText(/Capability Stock/i));
    fireEvent.click(screen.getByText(/Capability Stock/i));
    fireEvent.click(screen.getByText(/Capability Stock/i));
    const value = screen.getByText(/11/);
    expect(value).toBeInTheDocument();
  });

  test("that the correct click count differential is displayed in the UI", () => {
    render(<CapabilityStock value={10} numberOfClicksPerStockIncrease={3} />);
    fireEvent.click(screen.getByText(/Capability Stock/i));
    const displayedText = screen.getByText("2 clicks until Capability Point (CP) generated");
    expect(displayedText).toBeInTheDocument();
  });

  test("that the correct click count differential is displayed in the UI when only one click is left", () => {
    render(<CapabilityStock value={10} numberOfClicksPerStockIncrease={3} />);
    fireEvent.click(screen.getByText(/Capability Stock/i));
    fireEvent.click(screen.getByText(/Capability Stock/i));
    const displayedText = screen.getByText("1 click until Capability Point (CP) generated");
    expect(displayedText).toBeInTheDocument();
  });
});
