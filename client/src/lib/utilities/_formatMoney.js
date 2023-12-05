export function formatMoney(amount) {
  const options = {
    style: "currency",
    currency: "USD",
  };
  // check if it's a clean dollar amount
  if (amount % 100 === 0) options.minimumFractionDigits = 0;
  const formatter = Intl.NumberFormat("en-US", options);
  return formatter.format(amount);
}
