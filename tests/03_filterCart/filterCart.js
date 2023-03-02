function filterCart(cart, category) {
    return cart.filter(item => item.category === category);
  }
module.exports = { filterCart };
