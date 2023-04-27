import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import SingleProductShow from "./SingleProductShow";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { AddToDb, deleteAllData, getStoredCart } from "../../assets/Utils/FakeDB";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const saveCart = [];
    // console.log(products);
    const storedCart = getStoredCart();
    console.log(storedCart);
    for (const id in storedCart) {
      // console.log(storedCart[id]);
      const saveProduct = products.find((product) => product.id === id);
      // console.log(saveProduct);
      if (saveProduct) {
        const quantity = storedCart[id];
        saveProduct.quantity = quantity;
        console.log(saveProduct);
        saveCart.push(saveProduct);
      }
    }
    setCart(saveCart);
  }, [products]);

  const handleBuyBtn = (product) => {
    console.log(product);
    let newCart = [];
    const exiting = cart.find((pd) => pd.id === product.id);
    if (!exiting) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exiting.quantity = exiting.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, exiting];
    }
    setCart(newCart);
    AddToDb(product.id);
  };
  const handleClearCart = () =>{
    setCart([])
    deleteAllData()
}
  return (
    <div className="product-container container mx-auto mt-5 gap-5">
      <div className="grid grid-cols-3 gap-5">
        {products.map((product) => (
          <SingleProductShow
            key={product.id}
            product={product}
            handleBuyBtn={handleBuyBtn}
          ></SingleProductShow>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleClearCart={handleClearCart}>
          <Link to='/orders' ><button className="btn btn-info mt-5 w-full">Review Order</button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
