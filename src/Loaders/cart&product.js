import { getStoredCart } from "../assets/Utils/FakeDB";

const CartProduct = async () => {
  const loadProduct = await fetch("Data.json");
  const products = await loadProduct.json();

  const storedCart = getStoredCart()
//   console.log(storedCart); 
  const  saveCart = [];
  for (const id in storedCart){
    const saveProduct = products.find(pd => pd.id === id)
    if(saveProduct){
        const quantity = storedCart[id];
        saveProduct.quantity = quantity;
        // console.log(saveProduct);
        saveCart.push(saveProduct);
      }
    }
    return saveCart;
  }

export default CartProduct;
