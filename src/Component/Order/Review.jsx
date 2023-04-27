import React from "react";
import { TrashIcon } from '@heroicons/react/24/solid'

const Review = ({ product, handleSingleProductRemove }) => {
//   console.log(product);
  const { id,img, name, price, shipping } = product;
  return (
    <div className='flex justify-between items-center border-2 my-container mt-5 rounded-md'>
            <div className='flex items-center gap-10'>
                <img className='w-1/6'  src={img} alt="" />
                <ul>
                    <li className='font-bold'>{name}</li>
                    <li className='text-xl'>Price:${price}</li>
                    <li className='text-xl'>shipping:${shipping}</li>
                </ul>
            </div>
            <div className="px-5">
                <button onClick={()=>handleSingleProductRemove(id)}><TrashIcon className="h-6 w-6"></TrashIcon></button>
            </div>
        </div>
  );
};

export default Review;
