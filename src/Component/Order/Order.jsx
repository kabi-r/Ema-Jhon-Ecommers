import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import Review from './Review';
import { deleteAllData, singleItemRemove } from '../../assets/Utils/FakeDB';

const Order = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)
    // console.log(cart);
    const handleSingleProductRemove = id =>{
        const remaining = cart.filter(product=> product.id !== id)
        setCart(remaining)
        console.log(id);
        singleItemRemove(id)
    }
    const handleClearCart = () =>{
        setCart([])
        deleteAllData()
    }
    return (
        <div className=" w-full md:flex justify-center container mx-auto mt-5 gap-5">
      <div className="gap-5 w-2/3">
        {
            cart.map(product => <Review key={product.id} product={product} handleSingleProductRemove={handleSingleProductRemove}></Review>)
        }
      </div>
      <div className="w-1/3">
        <Cart cart={cart} handleClearCart={handleClearCart}>
        <Link to='/checkout'><button className="btn btn-info mt-5 w-full">Proceed Checkout</button></Link>
        </Cart>
      </div>
    </div>
    );
};

export default Order;