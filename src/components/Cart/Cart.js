import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const {cart} = props;

    console.log(cart)

    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.price;
        shipping = shipping + product.shipping
    }

    // const tax = total * 10 / 100
    const tax = parseFloat ((total * 0.1).toFixed(2));

    const grandTotal = total + shipping + tax

    return (
        <div className=''>
            <h1 className='text-center mt-10 text-md font-bold'>Order Summary</h1>
            <p className='ml-7 mt-5 text-md'>Selected Items : {cart.length}</p>
            <p className='ml-7 mt-3 text-md'>Total price : ${total}</p>
            <p className='ml-7 mt-3 text-md'>Total Shipping :${shipping}</p>
            <p className='ml-7 mt-3 text-md'>Tax : ${tax}</p>
            <h1 className='text-center mt-5 text-md font-bold'>Grand Total : ${grandTotal}</h1>
        </div>
    );
};

export default Cart;