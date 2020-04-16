// ========================================================
// Level 1 Challenges
// ========================================================

const sayHello = () => {
  return "Hello"
}

const area = (w, h) => {
  return w * h
}

const perimeter = (w, h) => {
  return w + w + h + h
}

const circleArea = r => {
  return Math.PI * r * r
}

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: You will need to implement methods below (not yet
// defined) in order to make the tests pass.
// ========================================================

cart = [];

const clearCart = () => {
  cart.length = 0
}

const createItem = (name, price, quantity) => {
  // should return a JSON object
  return { name, price, quntity: 1 }
}


const addItemToCart = (item) => {
  // should add it to shopping cart
  for (let i = 0; i < cart.length; i++) {
    if (item.name === cart[i].name) {
      cart[i].quantity += item.quantity
      return
    }
  }
  cart.push(item);
}

const getShoppingCart = () => {
  return cart;
}

const returnNumOfItemsInCart = () => {
  let quantity = 0;
  for(i = 0; i < cart.length; i++) {
    quantity += cart[i].quantity
  }
  return quantity;
}

const removeItemFromCart = (itemToRemove) => {
  for (i = o; i < cart.length; i += 1) {
    if (cart[i].name === itemToRemove.name) {
      cart.slice(i, 1);
    }
  }
  return cart;
}

module.exports = { 
  sayHello, area, perimeter, circleArea, clearCart, createItem, addItemToCart, 
  getShoppingCart, returnNumOfItemsInCart, removeItemFromCart
}
