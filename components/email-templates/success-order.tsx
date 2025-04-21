import * as React from "react";

interface Props {
  orderId: number;
  totalAmount: number;
}

export const SuccessOrderTemplate = ({ orderId, totalAmount }: Props) => (
  <div>
    <h1>Order #{orderId}</h1>

    <p>
      Your order of total: <b>{totalAmount} &#8364;</b> was processed
      successfully. You will receive your order soon!
    </p>
  </div>
);
