function addItems(cart, itemsToAdd){
  return [ ...cart, ...itemsToAdd ];
}
module.exports = { addItems };
