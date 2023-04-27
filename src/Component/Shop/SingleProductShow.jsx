import React from "react";
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const SingleProductShow = ({ product, handleBuyBtn }) => {
  // console.log(product);
  const {id, img, name, price, seller, ratings } = product;
  return (
    <div>
      <div className="card card-compact h-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <h4 className="text-base font-semibold">Price:{price}</h4>
          <h4 className="text-base font-semibold">Manufacturer:{seller}</h4>
          <h4 className="text-base font-semibold">Ratting:{ratings}</h4>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=>handleBuyBtn(product)}>Buy Now<ShoppingCartIcon className="h-6 w-6 text-white" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductShow;
