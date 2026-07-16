import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { PaymentSummary } from "./paymentSummary";
import { formatMoney } from "../../utils/money";
import axios from "axios";

vi.mock("axios");

describe("PaymentSummary Component", () => {
  let loadCart;

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

  it("Check Payment Summary Values", async () => {
    render(
      <MemoryRouter>
        <PaymentSummary loadCart={loadCart} paymentSummary={paymentSummary} />
      </MemoryRouter>,
    );

    expect(
      within(screen.getByTestId("payment-summary-items")).getByText(
        formatMoney(paymentSummary.productCostCents),
      ),
    ).toBeInTheDocument();

    expect(
      within(screen.getByTestId("payment-summary-shipping")).getByText(
        formatMoney(paymentSummary.shippingCostCents),
      ),
    ).toBeInTheDocument();

    expect(screen.getByTestId("payment-summary-subtotal")).toHaveTextContent(
      formatMoney(paymentSummary.totalCostBeforeTaxCents),
    );

    expect(screen.getByTestId("payment-summary-tax")).toHaveTextContent(
      formatMoney(paymentSummary.taxCents),
    );

    expect(screen.getByTestId("payment-summary-total")).toHaveTextContent(
      formatMoney(paymentSummary.totalCostCents),
    );
  });
});
