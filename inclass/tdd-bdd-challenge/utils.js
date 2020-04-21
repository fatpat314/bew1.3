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

shoppingCart = []

const clearCart = () => {
    shoppingCart = []
}

const createItem = (name, price) => {
    //should return a JSON object for the item
    return { name, price, quantity: 1}
}

const getCart = () => {
    return shoppingCart
}

const addItemToShoppingCart = (item) => {
    // should add it to shoppng cart
    // should return current state of shopping cart
    for (let i = 0; i < shoppingCart.length; i++){
        if (item.name == shoppingCart[i].name){
            shoppingCart[i].quantity += item.quantity
            return
        }
    }
    shoppingCart.push(item)
}

const getNumItemsInCart = () => {
    return shoppingCart.length
}

const removeItemFromCart = (item) => {
    for (let i = 0; i < shoppingCart.length; i++){
        if (item.name == shoppingCart[i].name){
            shoppingCart.delete(item)
            return
        }
    }


}




const itemAmount = (shoppingCart) => {

}


module.exports = {
  sayHello, area, perimeter, circleArea, createItem, getCart, addItemToShoppingCart, getNumItemsInCart, clearCart, removeItemFromCart
}
