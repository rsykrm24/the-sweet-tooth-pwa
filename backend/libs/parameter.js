export function parameter(amount,id,name,email) {
  let parameter = {
    "transaction_details": {
        "gross_amount": amount,
        "order_id": id,
    },
    "customer_details": {
        "name": name,
        "email": email
    }
  };
  return parameter
}