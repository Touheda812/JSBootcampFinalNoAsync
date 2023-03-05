// nice job! Perfect use of spread syntax
function addItems(cart, itemsToAdd){
  return [ ...cart, ...itemsToAdd ];
}
module.exports = { addItems };
