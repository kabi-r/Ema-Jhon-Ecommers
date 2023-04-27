const AddToDb = (id) => {
  let shoppingCart = {};

  // previous data check
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // Add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
};

// get data from local storage
const getStoredCart = () =>{
    let shoppingCart = {};

  // previous data check
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
}

// single remove item
const singleItemRemove = id =>{
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart)
    if (id in shoppingCart) {
      delete shoppingCart[id]
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart))
    }
  }
}

const deleteAllData = () =>{
  localStorage.removeItem('shopping-cart')
}
export {AddToDb, getStoredCart, singleItemRemove, deleteAllData}
