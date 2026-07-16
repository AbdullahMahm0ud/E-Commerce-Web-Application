import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router";
import { useLocation } from "react-router";
import { PaymentSummary } from "./paymentSummary";
import axios from "axios";

vi.mock("axios");

function Location() {
  const location = useLocation();
  return <div data-testid="url-path">{location.pathname}</div>;
}

describe("PaymentSummary Button Component", () => {
  let loadCart;
  let user = userEvent.setup();

  const paymentSummary = {
    totalItems: 5,
    productCostCents: 7169,
    shippingCostCents: 499,
    totalCostBeforeTaxCents: 7668,
    taxCents: 767,
    totalCostCents: 8435,
  };

  beforeEach(() => {
    axios.post.mockResolvedValue({});
    loadCart = vi.fn();
  });

  it("PaymentSummary Place Order Button", async () => {
    render(
      <MemoryRouter>
        <PaymentSummary loadCart={loadCart} paymentSummary={paymentSummary} />
        <Location />
      </MemoryRouter>,
    );

    await user.click(
      screen.getByRole("button", { name: "Place your order" }),
    );

    expect(axios.post).toHaveBeenCalledWith("/api/orders");
    expect(loadCart).toHaveBeenCalled();
    expect(screen.getByTestId("url-path")).toHaveTextContent("/orders");
  });
});