export function parameter(amount,id) {
  let parameter = {
    //"payment_type": "credit_card",
    "transaction_details": {
        "gross_amount": amount,
        "order_id": id,
    }
  };
  return parameter
}