import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useEnrollments from "../../../../components/Hook/useEnrollments";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const [cart] = useEnrollments();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const price = parseFloat(total.toFixed(2));

  return (
    <div>
      <h2 className="text-3xl mb-4">Payment Here!!!</h2>
      <div className="border rounded-md p-4">
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
