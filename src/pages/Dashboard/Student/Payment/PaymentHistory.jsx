import { useEffect, useState } from "react";
import axios from "axios";

const PaymentHistory = () => {
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    axios
      .get("/payments/history")
      .then((response) => {
        setPaymentHistory(response.data);
      })
      .catch((error) => {
        console.error("Error fetching payment history:", error);
      });
  }, []);

  return (
    <div>
      <h2>Payment History</h2>
      <ul>
        {paymentHistory.map((payment) => (
          <li key={payment.transactionId}>
            Transaction ID: {payment.transactionId} - Amount: {payment.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PaymentHistory;
