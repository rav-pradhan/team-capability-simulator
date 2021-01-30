import { render, fireEvent, screen } from "@testing-library/react";

import CustomerSatisfactionStock from "./CustomerSatisfactionStock";

describe("Customer Satisfaction Stock", () => {
  test("that a customer satisfaction value of 50 renders Neutral text", () => {
    render(<CustomerSatisfactionStock value={50} />);
    const value = screen.getByText("Neutral");
    expect(value).toBeInTheDocument();
  });
});
