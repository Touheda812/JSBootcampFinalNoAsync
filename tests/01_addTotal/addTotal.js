function addTotal(cart, state) {
  // Define tax rates for each state
  const taxRates = {
    NY: 0.09,
    NJ: 0.07,
    CT: 0.12,
  };

  // Calculate subtotal of all items in cart
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);

  // Calculate tax based on state
  const taxRate = taxRates[state];
  const tax = subtotal * taxRate;

  // Calculate total cost
  const total = subtotal + tax;

  // Round to 2 decimal places and convert to number
  const roundedTotal = Number(total.toFixed(2));

  return roundedTotal;
}
module.exports = { addTotal };
