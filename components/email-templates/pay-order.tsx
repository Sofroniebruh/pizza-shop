import * as React from "react";

interface Props {
  orderId: number;
  totalAmount: number;
  paymentUrl: string;
}

export const PayOrderTemplate: React.FC<Readonly<Props>> = ({
  orderId,
  totalAmount,
  paymentUrl,
}) => (
  <div>
    <h1>Order #{orderId}</h1>

    <p>
      Pay the order. Amount to pay: <b>{totalAmount} &#8364;</b>. Go{" "}
      <a href={paymentUrl}>to this link</a> for payment.
    </p>
  </div>
);
