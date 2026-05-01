import axios from "axios";

import { useState, useEffect } from "react";
import { CheckoutHeader } from "./CheckoutHeader";
import { PaymentSummary } from "./paymentSummary";
import { OrderSummary   } from "./orderSummay";

import "./CheckoutPage.css";

export function CheckoutPage({ cart }) {
  const [deliveryOptions, SetdeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);

  useEffect(() => {
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        SetdeliveryOptions(response.data);
      });

    axios.get("/api/payment-summary").then((response) => {
      setPaymentSummary(response.data);
    });
  }, []);

  return (
    <>
      <link rel="icon" type="image/svg+xml" href="cart-favicon.png" />
      <title>Checkout</title>

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

          <PaymentSummary paymentSummary={paymentSummary}/>
        </div>
      </div>
    </>
  );
}
