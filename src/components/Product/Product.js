import React from 'react';

const Product = (props) => {

    const {img, name, category, seller, price, ratings} = props.product
    
    // console.log(props.product)
    return (
        <div className='border rounded-lg relative'>
            <div className='w-[300px] h-[570px] pr-[8px] pt-[6px] pl-[6px]'>
                <img className='w-[286px] h-[286px] rounded-lg' src={img} alt="" />
                <h3 className='text-[17px] font-semibold mt-8'>Name : {name}</h3>
                <p className='text-[16px] font-semibold'>Category : {category}</p>
                <p className='mt-4'>Manufacturer : {seller}</p>
                <p className='text-[16px] font-semibold mt-4'>Price : ${price}</p>
                <p>Rating : {ratings}</p>
            </div>
            {/* product pass */}
            {/* <button onClick={props.handleAddToCart}>Add to Cart</button> ---step 1*/}
            {/* <button onClick={()=> props.handleAddToCart(props.product)}>Add to Cart</button> ----step 2*/}
            <button onClick={ ()=> props.handleAddToCart(props.product)} className='bg-orange-200 w-[300px] mt-6 border rounded-b-lg py-2 absolute bottom-0 hover:bg-orange-500'>Add to Cart</button>
        </div>
    );
};

export default Product;