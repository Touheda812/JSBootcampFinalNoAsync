function filterCart(cart, category) {
  // looks good!
    return cart.filter(item => item.category === category);
  }
module.exports = { filterCart };
